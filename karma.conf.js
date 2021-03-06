// Karma configuration
// Generated on Sat Mar 05 2016 11:10:08 GMT+0100 (CET)

var path = require('path');

module.exports = function(config) {
  'use strict';

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qooxdoo', 'jasmine'],

    // list of files / patterns to load in the browser => auto-filled by the qooxdoo adapter
    files: [
      "source/test/karma/helper-spec.js",
      { pattern: "source/test/karma/*.js" },
      { pattern: "source/test/karma/**/*.js" },
      { pattern: "source/resource/**/*", included: false, served: true, watched: false }
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'source/class/cv/{*.js,!(report)/**/*.js}': 'coverage',
      'client/source/class/cv/{*.js,!(test)/**/*.js}': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter : {
      dir: 'coverage',
      reporters: [
        { type: 'html'},
        { type : 'text-summary' }
      ]
    },

    // web server port
    port: 9876,

    proxies: {
      '/source/resource/designs': '/base/source/resource/designs',
      '/source/class/cv': '/base/source/class/cv',
      '/external/qooxdoo': '/base/external/qooxdoo',
      '/source/resource': '/base/source/resource',
      '/config': '/base/source/resource/config',
      '/demo': '/base/source/resource/demo',
      '../source/resource': '/base/source/resource',
      '/script': '/base/source/script',
      '/cgi-bin': '/base/source/resource/test'
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    browserNoActivityTimeout: 6000000,
    browserDisconnectTimeout: 6000000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    customLaunchers: {
      Chrome_travis: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222'
        ]
      }
},


  // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    qooxdooFramework: {
      testSources: true,
      scriptFile: "cv.js"
    }
  });
};
