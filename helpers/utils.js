

const restartApp = async () => {
    if (!driver.config.firstAppStart) {
      await driver.reset();
    }
  
    // Set the firstAppstart to false to say that the following test can be reset
    driver.config.firstAppStart = false;
  
    // Wait for the app to be ready and reset the state by clicking on the header image
    const headerImage = await $(locatorStrategy('longpress reset app'));
    await headerImage.waitForDisplayed();
    if (driver.isIOS()) {
      return driver.execute('mobile: touchAndHold', {
        elementId: headerImage.elementId,
        duration: 1,
      });
    }
    await driver.execute('mobile: longClickGesture', {
      elementId: headerImage.elementId,
      duration: 1000,
    });
  };
  
  
  const hideKeyboard = async () => {
    // The hideKeyboard is not working on iOS devices, so take a different approach
    if (!(await driver.isKeyboardShown())) {
      return;
    }
  
    if (driver.isIOS()) {
      await $('id=Return').click();
    } else {
      try {
        await driver.hideKeyboard('pressKey', 'Done');
      } catch (e) {
        // Fallback
        await driver.back();
      }
    }
  };
  
  
  const getTextOfElement = async (element) => {
    let visualText = '';
  
    try {
      // Android doesn't hold the text on the parent element
      // so each text view in the parent needs to be checked
      if (driver.isAndroid) {
        const elements = await element.$$('*//android.widget.TextView');
        for (let elm of elements) {
          visualText = `${visualText} ${await elm.getText()}`;
        }
      } else {
        visualText = await element.getText();
      }
    } catch (e) {
      visualText = await element.getText();
    }
  
    return visualText.trim();
  };
  
  const locatorStrategy = (selector) => {
    return driver.isIOS ? `id=${selector}` : `//*[@content-desc="${selector}"]`;
  };