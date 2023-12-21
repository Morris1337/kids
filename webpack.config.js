var path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },
}