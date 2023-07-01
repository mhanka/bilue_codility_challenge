import {locatorStrategy} from '../helpers/utils';
class LoginScreen{
    get loginScreen() {
        return $(locatorStrategy(loginScreenSelector));
     }
     
     get usernameField() {
         return $(locatorStrategy('Username input field'));
     }
     
     get usernameErrorMessage() {
         return $(locatorStrategy('Username-error-message'));
       }
     
     get passwordField() {
         return $(locatorStrategy('Password input field'));
     }
     
     get passwordErrorMessage() {
         return $(locatorStrategy('Password-error-message'));
     }
     
     get loginButton() {
         return $(locatorStrategy('Login button'));
     }
     
}

export default new LoginScreen();