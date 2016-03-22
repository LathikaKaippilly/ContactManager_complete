var webpack = require('webpack');
var path = require('path');
var cacheObj = {};

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app/components');

var config = {
	cache: cacheObj,
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module:{
  loaders:[
        {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
			{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }
   ]
  }
};

module.exports = config;
