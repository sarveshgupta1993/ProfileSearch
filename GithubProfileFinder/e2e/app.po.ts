import { browser, element, by } from 'protractor';

export class GithubProfileFinderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('git-root h1')).getText();
  }
}
