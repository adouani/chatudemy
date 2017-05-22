import { ChatudemyPage } from './app.po';

describe('chatudemy App', () => {
  let page: ChatudemyPage;

  beforeEach(() => {
    page = new ChatudemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
