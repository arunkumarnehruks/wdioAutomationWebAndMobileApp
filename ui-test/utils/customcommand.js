import { browser, $, $$, expect } from '@wdio/globals';

const platformKeyMap = {
    web: 'web',
    android: 'android',
    ios: 'ios',
};

browser.overwriteCommand('$', async ($, selector) => {
    let selectorElement;

    if(typeof selector === 'string') {
        selectorElement = $(selector);
    }
    else {
        selectorElement = $(getSelectorByPlatform(selector));    
    }
    return selectorElement;
});

function getSelectorByPlatform(selector) {
    const platform = getPlatform();                              
    const platformKey = validatAndGetPlatformKey(platform);      
    return selector[platformKey];                                
};

function getPlatform() {
    if(!driver.isMobile) return 'web';
    return driver.isIOS ? 'ios' : 'android';
}

function validatAndGetPlatformKey(platform) {
    return platformKeyMap[platform];
}