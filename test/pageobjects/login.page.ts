import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

class LoginPage extends Page {
    /* selectors */
    public get inputUsername () {
        return $('[data-qa-id="email-input"]');
    }

    public get inputPassword () {
        return $('[data-qa-id="password-input"]');
    }

    public get loginBtn () {
        return $('[data-qa-id="login-btn"]');
    }

    public get errorDisplay () {
        return $('[data-qa-id="error-display"]');
    }

    public get rememberMeCheckbox () {
        return $('[data-qa-id="remember-me-checkbox-label]')
    }

    public get checkedCheckbox () {
        return $('.uni-form__check-item--is-checked')
    }

    /* Page Methods */

    public async clearLoginFields() {
       await (await this.inputUsername).clearValue();
       await (await this.inputPassword).clearValue();
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    public async clickRememberMeCheckbox() {
        const rememberMeCheckbox = await this.rememberMeCheckbox;
        const isChecked = await (await this.checkedCheckbox).isExisting();
    
        if (!isChecked) {
            await rememberMeCheckbox.click();
            await browser.waitUntil(async () => {
                return (await this.checkedCheckbox).isExisting();
            }, {
                timeout: 5000, 
                timeoutMsg: 'Remember Me checkbox was not checked within 5 seconds'
            });
        }
    }
    
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
