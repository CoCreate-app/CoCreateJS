// Webpack uses this to work with directories
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

let isProduction = process.env.NODE_ENV === 'production';

// const getLogger = require('webpack-log');
// const log = getLogger({ name: 'webpack-batman' });
// log.info(__filename);
// let version = require('./package.json').version;
// log.info(version);

module.exports = {

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
        ...(isProduction ? { /*publicPath: 'https://cdn.cocreate.app/',*/ } : {}),

    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output

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
        hot: true,
    },

    mode: isProduction ? 'production' : 'development',
    // add source map
    ...(isProduction ? {} : { devtool: 'eval-source-map' }),

    // TODO: this will produce a large chunk file
    // ...isProduction && {devtool: 'eval-source-map' },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["@babel/plugin-transform-modules-commonjs"]

                    }
                }
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
