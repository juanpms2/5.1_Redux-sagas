const merge = require("webpack-merge");
const base = require("./webpack.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(base, {
	mode: "production",
	output: {
		filename: "[name].[chunkhash].js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash].css",
			chunkFilename: "[id].css"
		}),
		new CompressionPlugin({
			filename: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.jsx$|\.scss$|\.css$|\.html$/,
			threshold: 1024,
			minRatio: 0.8
		})
	]
});
