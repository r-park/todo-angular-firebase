import { TodoNgFirebasePage } from './app.po';


describe('App', () => {
  let page: TodoNgFirebasePage;

  beforeEach(() => {
    page = new TodoNgFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo Angular Firebase');
  });
});
