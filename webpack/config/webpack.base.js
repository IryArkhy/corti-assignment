const WebpackBar = require('webpackbar');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');
const paths = require('../utils/paths');

module.exports = env => ({
  mode: env.mode,
  context: paths.SRC_DIR,
  entry: path.resolve(__dirname, '../../src/index.tsx'),
  target: 'web',
  output: {
    path: paths.BUILD_DIR,
    filename: 'bundle.js',
  },
  stats: {
    children: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx', '.scss', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_module/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 8192,
              esModule: false,
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new Dotenv({
      path: path.resolve(__dirname, '../../.env'),
      systemvars: true,
    }),
  ],
});
