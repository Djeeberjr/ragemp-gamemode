const path = require("path");
const webpack = require("webpack");

module.exports = env => {
	const prod = (env && env.prod);

	return {
	mode: "production",
	devtool:false,
	entry: path.resolve(__dirname, "../client/index.js"),
	target:"node",
	output: {
		path: path.resolve(__dirname, "../client_packages"),
		filename: "index.js",
	},
	module: {
	},
	resolve: {
		modules: [
			path.resolve(__dirname, "../node_modules"),
		],
	},
	stats: "errors-warnings",
	plugins: [
		new webpack.DefinePlugin({
			DEVELOPMENT: JSON.stringify(!prod)
		})
	
}
};