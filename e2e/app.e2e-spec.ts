import { MyProjectMakesensePage } from './app.po';

describe('my-project-makesense App', function() {
  let page: MyProjectMakesensePage;

  beforeEach(() => {
    page = new MyProjectMakesensePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
