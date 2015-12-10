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

import { TaskService } from './task-service';


describe('TaskService', () => {
  let firebaseRef;
  let taskService;

  beforeEach(() => {
    firebaseRef = new Firebase('tasks/github:123');
    taskService = new TaskService(firebaseRef);
  });

  describe('Creating a task', () => {
    it('should push new task to firebase', (done: any) => {
      firebaseRef.on('child_added', (snapshot: FirebaseDataSnapshot) => {
        expect(snapshot.val().title).toEqual('test');
        done();
      });

      taskService.createTask('test');
      firebaseRef.flush();
    });
  });
});
