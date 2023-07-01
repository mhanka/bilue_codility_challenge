describe("Login workflow",()=>{
    beforeEach(async()=>{
        await restartApp();
        await LoginScreen.waitForDisplayed({timeout:30000});
    });
    it("Should be able to Login with valid credentials", async ()=>{
       await LoginScreen.usernameField.addValue('bob@example.com');
       await hideKeyboard();
       await LoginScreen.passwordField.addValue('10203040');
       await hideKeyboard();
       await LoginScreen.loginButton.click();
       await expect(await LoginScreen).not.toBeDisplayed();
       //await expect(await CheckoutAddressScreen).toBeDisplayed(); 
    });
    it("Failed login with incorrect email", async ()=>{
       await LoginScreen.usernameField.addValue('rob@example.com');
       await hideKeyboard();
       await LoginScreen.passwordField.addValue('10203040');
       await hideKeyboard();
       await LoginScreen.loginButton.click();
       await expect(await LoginScreen).toBeDisplayed();
       //await expect(await CheckoutAddressScreen).not.toBeDisplayed(); 
       await expect(await LoginScreen.usernameErrorMessage).toHaveTextContaining("Username is Incorrect");
    });
    it("Failed login using incorrect password", async ()=>{
       await LoginScreen.usernameField.addValue('rob@example.com');
       await hideKeyboard();
       await LoginScreen.passwordField.addValue('10203040');
       await hideKeyboard();
       await LoginScreen.loginButton.click();
       await expect(await LoginScreen).toBeDisplayed();
       //await expect(await CheckoutAddressScreen).not.toBeDisplayed(); 
       await expect(await LoginScreen.passwordErrorMessage).toHaveTextContaining("Password is Incorrect");
    });
     it("Failed login using empty password", async ()=>{
       await LoginScreen.usernameField.addValue('rob@example.com');
       await hideKeyboard();
       await LoginScreen.passwordField.addValue('');
       await hideKeyboard();
       await LoginScreen.loginButton.click();
       await expect(await LoginScreen).toBeDisplayed();
       //await expect(await CheckoutAddressScreen).not.toBeDisplayed(); 
       await expect(await LoginScreen.passwordErrorMessage).toHaveTextContaining("Password is required");
    });  
     it("Failed login using empty username", async ()=>{
       await LoginScreen.usernameField.addValue('rob@example.com');
       await hideKeyboard();
       await LoginScreen.passwordField.addValue('');
       await hideKeyboard();
       await LoginScreen.loginButton.click();
       await expect(await LoginScreen).toBeDisplayed();
       //await expect(await CheckoutAddressScreen).not.toBeDisplayed(); 
       await expect(await LoginScreen.usernameErrorMessage).toHaveTextContaining("Username is required");
    });      
});