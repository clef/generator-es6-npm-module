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
      <%_ if (answers['module:coffee']) { _%>
      { test: /\.coffee$/, loader: 'coffee-loader' },
      <%_ } _%>
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
    extensions: [
      '',
      '.js',
      '.json',
      <%_ if (answers['module:coffee']) { _%>
      '.coffee'
      <%_ } _%>
    ]
  }
};
