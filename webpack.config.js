const path = require('path');
const CoCreateConfig = require('./CoCreate.config')
const { ModuleGenerator, FileUploader, SymlinkCreator } = require('@cocreate/webpack')


const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = async (env, argv) => {
    const isProduction = argv.mode === 'production'
    const config = {
        // Path to your entry point. From this file Webpack will begin it's work
        entry: {
            'CoCreate': './src/index.js'
        },

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
            new ModuleGenerator(CoCreateConfig.modules),
            new FileUploader(env, argv),
            new SymlinkCreator(),
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
            })
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
                        loader: path.resolve(__dirname, 'node_modules/@cocreate/webpack/src/replace-unicode.js')
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
            }]
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

    return config;

}
