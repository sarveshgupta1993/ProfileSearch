import { GithubProfileFinderPage } from './app.po';

describe('github-profile-finder App', function() {
  let page: GithubProfileFinderPage;

  beforeEach(() => {
    page = new GithubProfileFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('git works!');
  });
});
