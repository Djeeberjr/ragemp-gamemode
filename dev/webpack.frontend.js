/*eslint-env node*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = env => {
	const prod = (env && env.prod);
	const debug = (env && env.debug);

	return {
	mode: (prod)? "production" : "development",
	entry: path.resolve(__dirname, "../frontend/index.js"),
	output: {
		path: path.resolve(__dirname, (prod) ? "../client_packages/dist" : "../frontend/devDist"),
		filename: "index.js",
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {},
					},
				],
			},
			{
				test: /\.css$/i,
				use: ["vue-style-loader","style-loader", "css-loader"],
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
		]
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "../node_modules"),
		],
	},
	stats: (prod) ? "errors-warnings" : "minimal",
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../frontend/index.html"),
		}),
		new webpack.DefinePlugin({
			DEVELOPMENT: JSON.stringify(!prod),
			DEBUG: JSON.stringify(debug || false),
		})
	]
}
};