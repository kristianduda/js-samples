const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      }
    ]
  }
};