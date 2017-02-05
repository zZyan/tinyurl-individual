import { TinyUrlClient2Page } from './app.po';

describe('tiny-url-client2 App', function() {
  let page: TinyUrlClient2Page;

  beforeEach(() => {
    page = new TinyUrlClient2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
