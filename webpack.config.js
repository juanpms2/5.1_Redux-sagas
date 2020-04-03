const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
const path = require("path");

const basePath = __dirname;

module.exports = {
	mode: "development",
	context: path.join(basePath, "src"),
	resolve: {
		alias: {
			common: path.resolve(basePath, "./src/common"),
			core: path.resolve(basePath, "./src/core"),
			layout: path.resolve(basePath, "./src/layout"),
			model: path.resolve(basePath, "./src/model"),
			pods: path.resolve(basePath, "./src/pods"),
			scenes: path.resolve(basePath, "./src/scenes")
		},
		extensions: [".js", ".ts", ".tsx"]
	},
	entry: ["./index.tsx"],
	devtool: "source-map",
	output: {
		path: path.join(basePath, "dist"),
		filename: "[name].js"
	},

	devServer: {
		inline: true,
		host: "localhost",
		port: 8080,
		stats: "minimal"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "awesome-typescript-loader",
				options: {
					useBabel: true,
					babelCore: "@babel/core" // needed for Babel v7
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				exclude: /node_modules/,
				loader: "file-loader",
				options: {
					name: "assets/img/[name].[ext]?[hash]"
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: "all",
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					enforce: true
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "index.html"
		}),
		new CheckerPlugin()
	]
};
