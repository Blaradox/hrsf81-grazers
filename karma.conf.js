// Karma configuration
// Generated on Thu Oct 05 2017 19:09:46 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: 'html',
      }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/templates/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'templates'
    },

    // list of files / patterns to load in the browser
    files: [
      'client/dist/app.bundle.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/sinon/pkg/sinon-4.0.1.js',
      'node_modules/chai/chai.js',
      //'client/src/index.js',
      //'client/src/**/*.js',
      'spec/clientSpec.js',
    ],

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-ng-html2js-preprocessor',
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
