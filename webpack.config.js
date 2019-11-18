const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new ErrorOverlayPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ],
  devtool: 'cheap-module-source-map'
};