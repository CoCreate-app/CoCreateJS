const path = require("path");
const CoCreateConfig = require("./CoCreate.config");
const {
	ModuleGenerator,
	FileUploader,
	SymlinkCreator
} = require("@cocreate/webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");

module.exports = async (env, argv) => {
	const isProduction = argv.mode === "production";
	const config = {
		entry: {
			CoCreate: "./src/index.js"
		},

		output: {
			path: path.resolve(__dirname, "dist"),
			filename: isProduction ? "[name].js" : "[name].js",
			chunkFilename: isProduction ? "[name].js" : "[name].js",
			library: "CoCreate", // The name of your library globally
			libraryExport: "default" // Exports the default export of your entry point
			// libraryTarget: "umd",
			// globalObject: "this" // Important for UMD compatibility
		},

		experiments: {
			asyncWebAssembly: true,
			// Note: topLevelAwait often requires a higher target or specific bundling config
			// Ensure your target environments support it or esbuild can transpile it adequately for your target.
			topLevelAwait: true
		},

		plugins: [
			new ModuleGenerator(CoCreateConfig.modules),
			new FileUploader(env, argv),
			new SymlinkCreator(),
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: isProduction ? "[name].min.css" : "[name].css",
				chunkFilename: (pathData) => {
					if (pathData.chunk.name === "CoCreateCSS") {
						return isProduction
							? "CoCreate.min.css"
							: "CoCreate.css";
					}
					return isProduction ? "[name].min.css" : "[name].css";
				}
			})
		],

		mode: isProduction ? "production" : "development",

		// Use 'source-map' for production (better for debugging) if needed, otherwise false or hidden.
		// 'eval-source-map' is good for development.
		devtool: isProduction ? "source-map" : "eval-source-map",

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: (modulePath) => {
						if (/ffmpeg/.test(modulePath)) {
							return true;
						}
						if (/node_modules/.test(modulePath)) {
							return true;
						}
						return false;
					},
					use: [
						{
							loader: path.resolve(
								__dirname,
								"node_modules/@cocreate/webpack/src/replace-unicode.js"
							)
						},
						{
							loader: "esbuild-loader",
							options: {
								target: "es2017"
							}
						}
					]
				},
				{
					test: /.css$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader"]
				},
				{
					test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
					type: "asset/resource",
					generator: {
						filename: "fonts/[name][ext][query]"
					}
				}
			]
		},

		optimization: {
			minimize: isProduction,
			minimizer: [
				new EsbuildPlugin({
					target: "es2017" // Match the loader target
					// css: true // Optional: uncomment to let esbuild try minifying CSS
				}),
				new CssMinimizerPlugin()
			],

			splitChunks: {
				chunks: "all",
				minSize: 1,
				minChunks: 1,
				maxAsyncRequests: 30,
				maxInitialRequests: 30,
				enforceSizeThreshold: 50000,
				cacheGroups: {
					defaultVendors: false
				}
			}
		},
		performance: {
			hints: process.env.NODE_ENV === "production" ? "warning" : false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000
		}
	};

	return config;
};
