import { Angular2CapacitacaoPage } from './app.po';

describe('angular2-capacitacao App', function() {
  let page: Angular2CapacitacaoPage;

  beforeEach(() => {
    page = new Angular2CapacitacaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
