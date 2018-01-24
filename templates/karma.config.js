module.exports = function (config) {
    config.set({
      frameworks: ['mocha', 'chai', 'karma-typescript'],
      files: [
        { pattern: 'src/**/*.ts' }
      ],
      preprocessors: {
        'src/**/*.ts': ['karma-typescript']
      },
      reporters: ['progress', 'karma-typescript'],
  
      browsers: ['ChromeHeadless', 'ChromeDebugging'],
  
      customLaunchers: {
        ChromeDebugging: {
          base: 'Chrome',
          flags: ['--remote-debugging-port=9222']
        }
      },
  
      karmaTypescriptConfig: {
        bundlerOptions: {
          entrypoints: /\.spec\.ts$/,
          sourceMap: true
        },
        coverageOptions: {
          instrumentation: false
        },
        tsconfig: './tsconfig.test.json'
      }
    })
  }