const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      baseUrl: "/",
      template: path.join(__dirname, "public", "index.html"),
      title: "React Jikan",
    }),
  ],
});
