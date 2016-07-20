import { Task } from './task';


describe('tasks/', () => {
  describe('Task', () => {
    it('should set title', () => {
      expect(new Task('test').title).toBe('test');
    });

    it('should set completed to false by default', () => {
      expect(new Task('test').completed).toBe(false);
    });
  });
});
