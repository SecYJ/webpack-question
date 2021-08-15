const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "output"),
		filename: "index.[hash].js",
	},
	module: {
		rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
