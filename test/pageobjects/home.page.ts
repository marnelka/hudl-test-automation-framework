import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * selectors using getter methods
     */
    public get navigationPanel () {
        return $('.hui-globalnav');
    }

    public get logOutBtn () {
        return $('[data-qa-id="webnav-usermenu-logout"]');
    }

    public get globalUserMenu () {
        return $('.hui-globalusermenu');
    }

    /**
     * page methods
     */

    public open () {
        return super.open('home');
    }

    async logOut() {
        await (await this.globalUserMenu).click();
        await (await this.logOutBtn).click()
    }
}

export default new HomePage();
