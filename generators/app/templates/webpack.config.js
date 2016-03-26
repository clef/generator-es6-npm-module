module.exports = {
  entry: './src/index.js',
  // add any external libraries that we require here
  externals: [ ],
  output: {
    filename: 'lib/index.js',
    library: '<%= answers['module:name'] %>',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  }
};
