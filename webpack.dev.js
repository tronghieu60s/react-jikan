const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      baseUrl: "/",
      template: path.join(__dirname, "public", "index.html"),
      title: "React Jikan Development",
    }),
  ],
});
