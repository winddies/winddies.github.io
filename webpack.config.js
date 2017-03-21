var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var pluginData=[new ExtractTextPlugin('style.css'),new OpenBrowserPlugin({ url: 'http://localhost:8080/' })]

module.exports = {
  entry: './src/index.js',
  output: {
    path: "./dist",
    filename: 'build.js',
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath:'/dist/'
  },
  module: {
    loaders: [
       //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader", "css-loader") },
      //.js 文件使用 babel-loader 来编译处理
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', "css!sass")},
      {test: /\.js$/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      //{ test: /\.js$/,loader: 'jsx-loader?harmony' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: pluginData
};
