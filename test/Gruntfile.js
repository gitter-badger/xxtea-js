module.exports = function (grunt) {
  var browsers = [{
    browserName: 'android',
    version: '4.0'
  }, {
    browserName: 'android',
    version: '4.1'
  }, {
    browserName: 'android',
    version: '4.2'
  }, {
    browserName: 'android',
    version: '4.3'
  }, {
    browserName: 'android',
    version: '4.4'
  }, {
    browserName: 'android',
    version: '5.1'
  }, {
    browserName: 'iphone',
    version: '9.2'
  }, {
    browserName: 'iphone',
    version: '9.1'
  }, {
    browserName: 'iphone',
    version: '9.0'
  }, {
    browserName: 'iphone',
    version: '8.4'
  }, {
    browserName: 'iphone',
    version: '8.3'
  }, {
    browserName: 'iphone',
    version: '8.2'
  }, {
    browserName: 'iphone',
    version: '8.1'
  }, {
    browserName: 'iphone',
    version: '8.0'
  }, {
    browserName: 'iphone',
    version: '7.0'
  }, {
    browserName: 'iphone',
    version: '6.1'
  }, {
    browserName: 'iphone',
    version: '6.0'
  }, {
    browserName: 'iphone',
    version: '5.1'
  }, {
    browserName: 'chrome',
    platform: 'Linux'
  }, {
    browserName: 'firefox',
    platform: 'Linux'
  }, {
    browserName: 'chrome',
    platform: 'OS X 10.8'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.8'
  }, {
    browserName: 'firefox',
    platform: 'OS X 10.8'
  }, {
    browserName: 'chrome',
    platform: 'OS X 10.9'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.9'
  }, {
    browserName: 'firefox',
    platform: 'OS X 10.9'
  }, {
    browserName: 'chrome',
    platform: 'OS X 10.10'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.10'
  }, {
    browserName: 'firefox',
    platform: 'OS X 10.10'
  }, {
    browserName: 'chrome',
    platform: 'OS X 10.11'
  }, {
    browserName: 'safari',
    platform: 'OS X 10.11'
  }, {
    browserName: 'firefox',
    platform: 'OS X 10.11'
  }, {
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: '20.10240'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 10',
    version: '11.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 8.1',
    version: '11.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 8',
    version: '10.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '11.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '10.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '9.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '8.0'
  }, {
    browserName: 'chrome',
    platform: 'Windows 7'
  }, {
    browserName: 'firefox',
    platform: 'Windows 7'
  }, {
    browserName: 'safari',
    platform: 'Windows 7'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows XP',
    version: '8.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows XP',
    version: '7.0'
  }, {
    browserName: 'internet explorer',
    platform: 'Windows XP',
    version: '6.0'
  }, {
    browserName: 'chrome',
    platform: 'Windows XP'
  }, {
    browserName: 'firefox',
    platform: 'Windows XP'
  }];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

    'saucelabs-mocha': {
      all: {
        options: {
          username: 'xxtea-js',
          key: '26efa126-9892-44db-b772-551f6ff22e04',
          urls: [
            'http://127.0.0.1:9999/index.html'
          ],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          testname: 'xxtea-js tests',
          throttled: 5,
          statusCheckAttempts: -1,
          maxRetries: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('default', ['connect', 'saucelabs-mocha']);
};
