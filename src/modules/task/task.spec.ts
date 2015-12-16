/* tslint:disable:no-unused-variable */
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit
} from 'angular2/testing';
/* tslint:enable:no-unused-variable */

import { Task } from './task';


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
