import { CoreuiTestPage } from './app.po';

describe('coreui-test App', function() {
  let page: CoreuiTestPage;

  beforeEach(() => {
    page = new CoreuiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
