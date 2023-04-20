import { browser, $, $$, expect } from '@wdio/globals';

const Selectors = {
    getStartedOption: {
        android: `~WebView`,
        web: `//a[contains(text(),'Get Started')]`,
    }
};

class demoAppHomePage {
    async getStarted() {
        await (await $(Selectors.getStartedOption)).isDisplayed();
        await $(Selectors.getStartedOption).click();
    }
}

export default new demoAppHomePage();