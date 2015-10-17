import Firebase from 'firebase';
import {
  beforeEach,
  describe,
  expect,
  it } from 'angular2/testing_internal';
import { Task } from './task';


export function main(): void {
  describe('Task', () => {
    let task: Task;

    beforeEach(() => {
      task = new Task('test');
    });

    it('should set title with provided `title` param', () => {
      expect(task.title).toBe('test');
    });

    it('should set `completed` to `false`', () => {
      expect(task.completed).toBe(false);
    });

    it('should set `createdAt` to firebase timestamp placeholder', () => {
      expect(task.createdAt).toEqual(Firebase.ServerValue.TIMESTAMP);
    });
  });
}
