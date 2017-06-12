import { TranningEx1Page } from './app.po';

describe('tranning-ex1 App', () => {
  let page: TranningEx1Page;

  beforeEach(() => {
    page = new TranningEx1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
