import { PlanningPokerPage } from './app.po';

describe('planning-poker App', () => {
  let page: PlanningPokerPage;

  beforeEach(() => {
    page = new PlanningPokerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
