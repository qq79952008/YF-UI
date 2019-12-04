const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./package.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, "../package/dev"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"'
      }
    }),
    new MiniCssExtractPlugin({
      // 类似 webpackOptions.output里面的配置 可以忽略
      filename: "yfui.min.css"
    })
  ]
});
