let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./features/*.feature.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: [
            '--start-maximized'
        ]
    }
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
}
