var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  // any requirements that should not be bundled in the package
  // should go here
  vendor: [],
  output: {
    filename: 'lib/index.js'
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
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "lib/vendor.js", Infinity)
  ]
};
