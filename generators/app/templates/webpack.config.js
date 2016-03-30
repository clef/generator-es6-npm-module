var path = require('path')
var webpack = require('webpack')
var packageJSON = require('./package.json')
<%_ if (answers['module:react']) { _%>
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefix = require('autoprefixer')
var precss = require('precss')
<%_ } %>

module.exports = {
  entry: './src/index.js',
  // Make all peerDependencies external by default. The only reason you would
  // not want to do this is if you were building a library for distribution
  // as a standalone file, rather than a module that will later be built
  // with a build tool like Webpack or Browserify
  //
  // For more information on when to use peerDependencies vs. dependencies,
  // please consult the README.
  externals: packageJSON.peerDependencies ? Object.keys(packageJSON.peerDependencies) : [],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'lib/index.js',
    library: '<%= answers['module:name'] %>',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      <%_ if (answers['module:react']) { %>
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader?modules&importLoaders=1",
          "postcss-loader"
        )
      },
      <%_ } %>,
      <%_ if (answers['module:coffee']) { _%>
      {
        test: /\.coffee$/,
        loaders: [
          'coffee',
          <%_ if (answers['module:react']) { _%>
          'cjsx'
          <%_ } %>
        ]
      },
      <%_ } _%>
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            <%_ if (answers['module:react']) { _%>
            'react'
            <%_ } _%>
          ]
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
  },
  <%_ if (answers['module:react']) { _%>
  postcss: function() {
    return [autoprefixer, precss]
  },
  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]
  <%_ } %>
};
