const path = require('path');
const webpack = require('webpack');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

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
      loader: 'awesome-typescript-loader',

      options: {
        getCustomTransformers: () => ({
          before: [styledComponentsTransformer]
        })
      }
    }]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
};
