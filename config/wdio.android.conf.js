const { join } = require('path');
const config = require('./wdio.shared.local.appium.conf').default;

// ============
// Capabilities
// ============

config.maxInstances = 1;

config.capabilities = [
  {
    platformName: 'Android',
    'appium:deviceName': 'Pixel_3_10.0',
    'appium:platformVersion': '10.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(
      __dirname,
      '../../../',
      `./app/android/Android-MyDemoAppRN.1.3.0.build-244.apk`,
    ),
    'appium:appWaitActivity': 'com.saucelabs.mydemoapp.rn.MainActivity',
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
    'appium:allowInvisibleElements': true,
  },
];

exports.config = config;
