const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    products: "./src/scripts/products.js",
    register: "./src/scripts/register.js",
    signin: "./src/scripts/signin.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/products.html",
      inject: true,
      chunks: ["products"],
      filename: "products.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/register.html",
      inject: true,
      chunks: ["register"],
      filename: "register.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/signin.html",
      inject: true,
      chunks: ["signin"],
      filename: "signin.html",
    }),
    new CopyPlugin({
      patterns: [
        // Copy static assets, images etc
        {
          from: path.resolve(__dirname, "static"),
          to: path.resolve(__dirname, "dist", "static"),
        },
        {
          from: path.resolve(__dirname, "server"),
          to: path.resolve(__dirname, "dist", "server"),
        },
        {
          from: path.resolve(__dirname, "server.js"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "users"),
          to: path.resolve(__dirname, "dist", "users"),
        },
      ],
    }),
    // new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: { chunks: "all" },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
