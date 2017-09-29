import { HomeworkPage } from './app.po';

describe('homework App', () => {
  let page: HomeworkPage;

  beforeEach(() => {
    page = new HomeworkPage();
  });

  it('should display message saying Homework', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Homework');
  });
});
