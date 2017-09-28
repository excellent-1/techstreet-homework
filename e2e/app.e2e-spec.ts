import { TechstreetHomeworkPage } from './app.po';

describe('techstreet-homework App', () => {
  let page: TechstreetHomeworkPage;

  beforeEach(() => {
    page = new TechstreetHomeworkPage();
  });

  it('should display message saying Techstreet Homework', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Techstreet Homework');
  });
});
