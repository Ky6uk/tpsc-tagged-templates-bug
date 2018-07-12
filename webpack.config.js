const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './index.tsx',

  output: {
    filename: 'index.js',
    path: __dirname
  },

  module: {
    rules: [{
      test: /\.(?:tsx?)$/,
      loader: 'awesome-typescript-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
};
