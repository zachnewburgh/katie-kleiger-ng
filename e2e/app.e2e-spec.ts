import { KatieKleigerNgPage } from './app.po';

describe('katie-kleiger-ng App', () => {
  let page: KatieKleigerNgPage;

  beforeEach(() => {
    page = new KatieKleigerNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
