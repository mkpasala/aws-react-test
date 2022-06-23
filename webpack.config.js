const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  devServer: {
    static: __dirname + '/dist/',
    port: 2022,
  },
  module: {
    rules: [{
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    {
      test: /\.(png|jpe?g|gif|jp2|webp)$/,
      type: 'asset/resource'
    },
    ]
  },
  devtool: prod ? undefined : 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};