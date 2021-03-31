// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const TerserPlugin = require("terser-webpack-plugin");
let isProduction = process.env.NODE_ENV === 'production';
const getLogger = require('webpack-log');
const log = getLogger({ name: 'webpack-batman' });


log.info(__filename);

// This is main configuration object.
// Here you write different options and tell Webpack what to do
// let version = require('./package.json').version;
// log.info(version);
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: {
        'CoCreate': './src/index.js',
        // 'CoCreate-floating-label': '../CoCreate-components/CoCreate-floating-label/src'
    },

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
    path: path.resolve(__dirname, 'dist'),
        filename: isProduction ? '[name].min.js' : '[name].js',
        // filename: (pathData) => {
        //     if (isProduction) {
        //         if (pathData.chunk.name === 'CoCreate')
        //             // return `[name].${version}.min.js`;
        //             return `[name].min.js`;
        //         else
        //             return '[name].min.js';
        //     }
        //     else
        //         return isProduction ? '[name].min.js' : '[name].js';
        // },

        libraryTarget: 'umd',
        libraryExport: 'default',
        library: 'CoCreate',
        globalObject: "this",
        ...(isProduction ? { /*publicPath: 'https://cdn.cocreate.app/',*/ } : {}),

    },
    devServer: {
        hot: true,
    },
    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript
    // minifying and other thing so let's set mode to development
    mode: isProduction ? 'production' : 'development',
    // add source map
    ...(isProduction ? {} : { devtool: 'eval-source-map' }),

    // todo: this will produce a large chunk file
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin()
    ],

    optimization: {
        minimize: true,
        // minimizer: [
        //     new TerserPlugin({
        //         extractComments: true,
        //         // cache: true,
        //         parallel: true,
        //         // sourceMap: true, // Must be set to true if using source-maps in production
        //         terserOptions: {
        //             // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        //             // extractComments: 'all',
        //             compress: {
        //                 drop_console: true,
        //             },
        //         },
        //     }),
        // ],
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
