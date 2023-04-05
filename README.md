# hudl-test-automation-framework
WebdriverIO test automation framework for Hudl's login functionality. This repository contains automated tests for the login feature of the Hudl web application, implemented using WebdriverIO and JavaScript.

Why WebDriverio? https://webdriver.io/docs/why-webdriverio

*Setup*

- Clone the repository using the SSH URL ([Using SSH keys with GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh))
- Download and install nvm ([Instructions](https://github.com/nvm-sh/nvm))
- Use nvm to install the latest stable Node version 
- Run `npm install` in hudl-test-automation-framework directory

*Running the tests*

wdio run ./wdio.conf.ts

# to only run a single file

wdio run ./wdio.conf.ts -- --spec ./test/specs/login.test.ts

*Debug Mode*

WebDriverio has an awesome feature called browser.debug(). This will pause the test at that line, convert the terminal into a JS-like repl(so you can try out commands like `$('.button[data-qa-id="submit"]).click()`). Set a longer Jasmine timeout in wdio.conf.ts file, so that you have more time for debugging, but don't forget to revert the change when the debug mode is no longer needed.

