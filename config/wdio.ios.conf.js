import {join} from 'path';
import config from './wdio.shared.local.appium.conf';

// ============
// Capabilities
// ============
//
config.maxInstances = 1;
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'iOS',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': 'iPhone 13',
    'appium:platformVersion': '15.4',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    // The path to the app
    'appium:app': join(
      __dirname,
      '../../../',
      '.app/ios/Debug-iphonesimulator/iOS-Real-Device-MyRNDemoApp.1.3.0-162.ipa',
    ),
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    'appium:noReset': true,
    // @ts-ignore
    'appium:shouldTerminateApp': true,
    'appium:newCommandTimeout': 240,
    // @ts-ignore
    'appium:allowTouchIdEnroll': true,
  },
];

exports.config = config;