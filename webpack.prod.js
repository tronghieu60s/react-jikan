const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseUrl = "/react-jikan/";

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: baseUrl,
  },
  plugins: [
    new HtmlWebpackPlugin({
      baseUrl,
      template: path.join(__dirname, "public", "index.html"),
      title: "React Jikan",
    }),
  ],
});
