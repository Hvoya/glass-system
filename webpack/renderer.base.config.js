const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'electron-renderer',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.module.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|webp|svg|eot|woff|ttf)$/,
        loader: 'file-loader',
        options: {
          limit: 1024,
          name: 'assets/[folder]/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/renderer/index.html'),
    }),
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      features: path.resolve(__dirname, '../src/renderer/components/features'),
      pages: path.resolve(__dirname, '../src/renderer/components/pages'),
      hoc: path.resolve(__dirname, '../src/renderer/components/hoc'),
      shared: path.resolve(__dirname, '../src/renderer/components/shared'),
      '@': path.resolve(__dirname, '../src/renderer'),
    },
  },
};
