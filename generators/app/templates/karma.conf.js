var webpackConfig = require('./webpack.config.js')
webpackConfig.devtool = 'inline-source-map'
delete webpackConfig.externals
delete webpackConfig.entry
delete webpackConfig.output

webpackConfig.postLoaders = [{
  <%_ if (answers['module:coffee']) { _%>
  test: /\.(js|coffee)$/,
  <%_ } else { _%>
  test: /\.(js)$/,
  <%_ } _%>
  exclude: /(spec|node_modules)\//,
  loader: 'istanbul-instrumenter'
}]

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['chai', 'mocha', 'sinon'],
    files: [
      'tests.bundle.js'
    ],
    preprocessors: {
      'tests.bundle.js': ['webpack', 'sourcemap']
    },
    reporters: [
      'dots',
      'coverage'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: false
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
  })
}
