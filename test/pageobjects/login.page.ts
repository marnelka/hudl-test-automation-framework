import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

class LoginPage extends Page {
    /* selectors using getter methods */
    public get usernameInput () {
        return $('[data-qa-id="email-input"]');
    }

    public get passwordInput () {
        return $('[data-qa-id="password-input"]');
    }

    public get loginBtn () {
        return $('[data-qa-id="login-btn"]');
    }

    public get errorDisplay () {
        return $('[data-qa-id="error-display"]');
    }

    public get rememberMeCheckbox () {
        return $('[data-qa-id="remember-me-checkbox-label"]');
    }

    public get checkedCheckbox () {
        return $('.uni-form__check-item--is-checked');
    }


    /* Page Methods */

    public async clearLoginFields() {
       await (await this.usernameInput).clearValue();
       await (await this.passwordInput).clearValue();
    }

    public async login (username: string, password: string) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }

    public async enableRememberMeCheckbox(enable: boolean) {
        const rememberMeCheckbox = await this.rememberMeCheckbox;
        const isChecked = await (await this.checkedCheckbox).isExisting();
      
        if (isChecked !== enable) {
          await rememberMeCheckbox.click();
          await browser.waitUntil(async () => {
            return await (await this.checkedCheckbox).isExisting() === enable;
          }, {
            timeout: 5000,
            timeoutMsg: `Remember Me checkbox was not ${enable ? 'checked' : 'unchecked'} within 5 seconds`
          });
        }
      }
    
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
