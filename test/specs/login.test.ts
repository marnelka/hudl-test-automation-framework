import { config } from 'dotenv';
import loginPage from '../pageobjects/login.page.ts';
import { invalidCredentials, blankCredentials } from '../testdata/loginData.ts';
import homePage from '../pageobjects/home.page.ts';
config();

describe('Login related functionality', () => {
  beforeAll(async () => await loginPage.open());

  describe('Log in with Invalid credentials', () => {
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

   describe('Login with valid credentials', () => {
      afterAll(async () => await homePage.logOut());
      
      it('should allow a user to log in with valid credentials', async () => {
         await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
         await expect(homePage.navigationPanel).toBeExisting();
       })
   })

   describe('Remember Me Functionality', () => {
    beforeAll(async () => await loginPage.open());

    xit('should remember the user', async () => {
      // Log in with remember me functionality enabled
      await loginPage.enableRememberMeCheckbox(true);
      await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
      await expect(homePage.navigationPanel).toBeExisting();

      // Navigate to the login page again and verify that the user is remembered and redirected
      await loginPage.open();
      await expect(homePage.navigationPanel).toBeExisting();
      await homePage.logOut();
    });

    it('should not remember the user when remember me checkbox is disabled', async () => {
      // Log in with remember me functionality disabled
      await loginPage.enableRememberMeCheckbox(false);
      await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
      await expect(homePage.navigationPanel).toBeExisting();

      // Logout and navigate to the login page again
      await homePage.logOut();
      await loginPage.open();

      // Verify that the user is not remembered and the login fields are empty
      await expect(loginPage.usernameInput).toHaveValue('');
      await expect(loginPage.passwordInput).toHaveValue('');
    });
  });

});


