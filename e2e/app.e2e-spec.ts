import { TodoPage } from './app.po';

describe('Todo App', () => {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo Angular2 Firebase');
  });
});
