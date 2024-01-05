var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin( {
        template: "./Math/index.pug",
        filename: "index-math.html"
      })
    ],
    devServer: {
      static:{
        directory: path.join(__dirname, '../kids'),
      },
      port: 3001,
      hot: true,
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
          {
            test: /\.pug$/,
            use: 'pug-loader'
          }
        ],
      },
      optimization: {
        minimizer: [
          '...',
          new CssMinimizerPlugin(),
        ],
      },
}