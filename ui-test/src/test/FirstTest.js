import { browser, $, $$, expect } from '@wdio/globals';
import homepage from '../pages/homepage';

describe('wdio get started', async function() {
    it('test to get started', async function() {
        browser.url('/');
        await homepage.getStarted();  
    });
});