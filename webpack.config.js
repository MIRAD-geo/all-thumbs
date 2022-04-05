const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
     template: './client/index.html',
     filename: './index.html'
})
 
const config = {
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin],
  devServer: {
    'static': {
      directory: path.join(__dirname, './dist'),
      publicPath: '/dist',
    },
    proxy: {'/api': "http://localhost:3000"}
  },
  resolve: {
      extensions: ['.js', ',jsx', '.css']
  }
};

module.exports = config;
