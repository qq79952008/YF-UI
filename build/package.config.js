const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  entry: {
    yfui: path.resolve(__dirname, "../src/components/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../package"),
    publicPath: "/package/",
    library: "yfui",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: "vue-style-loader!css-loader",
            sass: "vue-style-loader!css-loader!sass-loader"
          },
          postLoaders: {
            html: "babel-loader"
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "autoprefixer-loader"]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=8192"
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({ banner: "/* eslint-disable */", raw: true })
  ]
};
