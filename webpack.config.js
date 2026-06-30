const path = require("path");
const webpack = require("webpack"); // <-- ADDED: Required for the Replacement Plugin
const CoCreateConfig = require("./CoCreate.config");
const {
	ModuleGenerator,
	FileUploader,
	SymlinkCreator,
	UnicodeLoader
} = require("@cocreate/webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { EsbuildPlugin } = require("esbuild-loader");

module.exports = async (env, argv) => {
	const isProduction = argv.mode === "production";
	const config = {
		entry: {
			CoCreate: "./CoCreate.modules.js"
		},

		output: {
			path: path.resolve(__dirname, "./src/dist"),
			filename: isProduction ? "[name].js" : "[name].js",
			chunkFilename: isProduction ? "[name].js" : "[name].js",
			library: "CoCreate", // The name of your library globally
			libraryExport: "default", // Exports the default export of your entry point
			clean: true
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
			// new SymlinkCreator(),
			
			// <-- ADDED: The Surgical Fix for npm link -->
			// Forcefully redirects any dynamic import of "CoCreate.config.js" 
			// to the physical file in your project root, bypassing symlinks.
			new webpack.NormalModuleReplacementPlugin(
				/CoCreate\.config\.js$/,
				function (resource) {
					resource.request = path.resolve(__dirname, "./CoCreate.config.js");
				}
			),

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
		// devtool: isProduction ? "source-map" : "eval-source-map",

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
					target: "es2017", // Match the loader target
					css: true
				})
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