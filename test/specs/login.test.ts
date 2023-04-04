import loginPage from '../pageobjects/login.page.ts';
import libraryPage from '../pageobjects/library.page.ts';
import { validCredentials, invalidCredentials, blankCredentials } from '../testdata/loginData.ts';

describe('Login functionality', () => {
    beforeAll(async () => await loginPage.open());

  describe('Logging in with Invalid Credentials', () => {
    afterEach(async () => await loginPage.clearLoginFields());
    it('should not allow a user to log in with invalid credentials', async () => {
       await loginPage.login(invalidCredentials.username, invalidCredentials.password);
       await expect(loginPage.errorDisplay).toBeExisting();
    });

    it('should not allow a user to log in with blank credentials', async () => {
       await loginPage.login(blankCredentials.username, blankCredentials.password);
       await expect(loginPage.errorDisplay).toBeExisting();
      });

    });


   describe('Remember Me Functionality', () => {

    it('should login with valid credentials and remember me checkbox enabled', async () => {
       await loginPage.clickRememberMeCheckbox();
       await browser.debug()
       await loginPage.login(validCredentials.username, validCredentials.password);
       await expect(libraryPage.navigationPanel).toBeExisting();
    });

    it('should remember the user after session has been reloaded', async () => {
        await browser.reloadSession();
        await loginPage.open()
        await expect(libraryPage.navigationPanel).toBeExisting();
    })

}) 
});


