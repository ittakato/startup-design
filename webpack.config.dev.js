const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devtool: 'eval',
  devServer: {
    port: 9000,
    static: path.resolve(__dirname, './dist'),
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    hot: false,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: { maxSize: 10 * 1024 },
        },
        generator: {
          filename: './assets/[name][ext]',
        },
      },
    ],
  },
});
