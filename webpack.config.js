const fs = require('fs');
const path = require('path');
const upload = require('@cocreate/cli/src/commands/upload.js')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = async (env, argv) => {
    const isProduction = argv.mode === 'production'
    const isWatch = argv.watch === true;
    let isWatching = false

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

        // devServer: {
        //     hot: true
        // },

        mode: isProduction ? 'production' : 'development',

        // add source map
        ...(isProduction ? { devtool: 'eval-source-map' } : { devtool: 'eval-source-map' }),

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
                            plugins: ["@babel/plugin-transform-modules-commonjs"],
                            retainLines: true, // Add this option
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
                    parallel: true,
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
                symlink('./dist', '../dist', 'dir')
                symlink('./node_modules/@cocreate/pwa/src/service-worker.js', '../service-worker.js', 'file')
                symlink('./node_modules/@cocreate/pwa/src/manifest.webmanifest', '../manifest.webmanifest', 'file')
                symlink('./node_modules/@cocreate/pwa/src/offline.html', '../offline.html', 'file')
            },
        });
    }

    if (isWatch) {
        if (env.beforeCompilation)
            upload(__dirname, ['../', '-w'])
        else if (env.afterCompilation) {
            config.plugins.push({
                apply: (compiler) => {
                    // Hook into the "emit" event, which occurs after the compilation is complete
                    compiler.hooks.emit.tapAsync('watchFiles', (compilation, callback) => {
                        if (!isWatching) {
                            isWatching = true
                            upload(__dirname, ['../', '-w'])
                        }
                        // Don't forget to call the callback function to signal completion
                        callback();
                    });
                }
            })
        }
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
