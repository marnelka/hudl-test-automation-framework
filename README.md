# hudl-test-automation-framework
WebdriverIO test automation framework for Hudl's login functionality. This repository contains automated tests for the login feature of the Hudl web application, implemented using WebdriverIO and JavaScript.

Why WebDriverio? https://webdriver.io/docs/why-webdriverio 

Note: The choice of tools also highly depends on the project and its needs.

*Setup*

- Clone the repository using the SSH URL ([Using SSH keys with GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh))
- Install Homebrew on your system (if not already installed)
- Download and install nvm ([Instructions](https://github.com/nvm-sh/nvm))
- Use nvm to install the latest stable Node version (like nvm install 18 && nvm alias default 18)
- Run `npm install` in hudl-test-automation-framework directory

*Running the tests*

wdio run ./wdio.conf.ts

*to only run a single file*

wdio run ./wdio.conf.ts -- --spec ./test/specs/login.test.ts

*Debug Mode*

WebDriverio has an awesome feature called browser.debug(). This will pause the test at that line, convert the terminal into a JS-like repl(so you can try out commands like `$('.button[data-qa-id="submit"]).click()`). Set a longer Jasmine timeout in wdio.conf.ts file, so that you have more time for debugging, but don't forget to revert the change when the debug mode is no longer needed.

*Setting up Environment Variables*

- In the root directory of the project, locate the example.env file and make a copy of it.
- Rename the copied file to .env. Note that the file name should start with a dot, and there should be no file extension.
- Open the .env file in a text editor, and replace the placeholders with the actual values. 
- Save the .env file.
- That's it! Now your environment variables should be properly set for this project to work. When you run the application, it will automatically load the environment variables from the .env file.

Note: Be careful not to commit the .env file to version control, as it contains sensitive information. You should add the .env file to your .gitignore file to make sure it is not accidentally committed.

*Test Coverage*

This test automation framework covers several scenarios related to the login functionality of the Hudl web application. Some of the main test cases that are covered include:

- Successful logins with valid credentials
- Failed logins with incorrect credentials
- Remember Me functionality

Note: There is currently a known bug in the application that causes the "Should Remember the User" case to fail. Therefore, the related test case has been temporarily disabled until the bug is fixed.

If I had more time for the assignment, I would explore additional scenarios to test depending on the project's requirements, such as testing different user roles and permissions, testing different types of input data, testing password reset functionality, and testing security features like session timeouts and password strength requirements.
