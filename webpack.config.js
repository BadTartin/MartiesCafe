const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    // {
    //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           name: '[name].[hash].[ext]',
    //           outputPath: 'images/',
    //         },
    //       },
    //     ],
    //   },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/template.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  }
};