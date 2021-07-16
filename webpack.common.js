const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "index.js")],
  output: {
    clean: true,
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  performance: {
    hints: false,
  },
};
