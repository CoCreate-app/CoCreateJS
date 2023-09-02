const fs = require('fs');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = async (env, argv) => {
    let isProduction = false
    if (argv.mode === 'production')
        isProduction = true

    const config = {
        // Path to your entry point. From this file Webpack will begin his work
        entry: {
            'CoCreate': './src/index.js'
        },

        // Path and filename of your result bundle.
        // Webpack will bundle all JavaScript into this file
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].min.js' : '[name].js',
            chunkFilename: isProduction ? '[name].min.js' : '[name].js',
            libraryTarget: 'umd',
            libraryExport: 'default',
            library: 'CoCreate',
            globalObject: "this",
        },

        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isProduction ? '[name].min.css' : '[name].css',
                // chunkFilename: isProduction ? '[name].min.css' : '[name].css',
                chunkFilename: (path) => {
                    if (path.name === 'CoCreateCSS')
                        return isProduction ? 'CoCreate.min.css' : 'CoCreate.css';
                    else
                        return isProduction ? '[name].min.css' : '[name].css';
                },
            }),
        ],

        devServer: {
            hot: true
        },

        mode: isProduction ? 'production' : 'development',
        // add source map
        ...(isProduction ? {} : { devtool: 'eval-source-map' }),

        module: {
            rules: [{
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve(__dirname, 'node_modules/@cocreate/cli/src/loaders/replace-unicode.js')
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ["@babel/plugin-transform-modules-commonjs"]
                        }
                    }
                ]
            },
            {
                test: /.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }

            ]
        },

        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    extractComments: true,
                    // cache: true,
                    parallel: true,
                    // sourceMap: true, // Must be set to true if using source-maps in production
                    terserOptions: {
                        compress: {
                            drop_console: true,
                        },
                    },
                }),
            ],
            splitChunks: {
                chunks: 'all',
                minSize: 1,
                // maxSize: 999999999,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: false,

                },
            },
        },

    };

    // Hook into the 'done' event of the compiler to execute code when the build is complete.
    if (!isProduction) {
        config.plugins.push({
            apply: (compiler) => {
                compiler.hooks.done.tap('BuildCompletePlugin', () => {
                    console.log('Webpack build is complete in development mode!');
                    symlink('./dist', '../dist', 'dir')
                    symlink('./node_modules/@cocreate/pwa/src/service-worker.js', '../service-worker.js', 'file')
                    symlink('./node_modules/@cocreate/pwa/src/manifest.webmanifest', '../manifest.webmanifest', 'file')
                });
            },
        });
    }

    return config;

}

function symlink(target, destination, option) {
    if (fs.existsSync(target)) {
        target = path.resolve(target)

        if (!fs.existsSync(destination)) {
            destination = path.resolve(destination)

            fs.symlink(target, destination, option, (err) => {
                if (err)
                    console.log(err);
                else
                    console.log("symlink added: ", target);
            })

        }
    }
}
