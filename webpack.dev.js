/* eslint-disable */

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const { resolve } = require('path');
const babelConfig = require('./babel.config.json');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: babelConfig.presets,
          plugins: babelConfig.plugins
        }
      }, {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [autoprefixer];
              }
            }
          },
          'less-loader'
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|svg)$/,
        use: [
          'url-loader'
        ]
      }, {
        test: /\.(less|js)$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: '\@@URL@@',
              replace: 'http://localhost:5001',
              flags: 'g'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Root: resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  watch: true
};
