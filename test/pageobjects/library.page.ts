import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get navigationPanel () {
        return $('.hui-globalnav');
    }

    public get logOutBtn () {
        return $('[data-qa-id="webnav-usermenu-logout"]');
    }


}

export default new SecurePage();
