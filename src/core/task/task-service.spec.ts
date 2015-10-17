import { Injector, provide } from 'angular2/angular2';
import {
  beforeEach,
  describe,
  expect,
  it } from 'angular2/testing_internal';
import { AuthService } from '../auth/auth-service';
import { firebaseRef } from '../firebase/firebase-ref';
import { Task } from './task';
import { TaskService } from './task-service';


class FirebaseStub {
  child(): FirebaseStub { return this; }
  push(): void {}
  remove(): void {}
  update(): void {}
}

class AuthServiceStub {
  id: string = '123';
}


export function main(): void {
  describe('TaskService', () => {
    let injector: Injector;

    beforeEach(() => {
      injector = Injector.resolveAndCreate([
        TaskService,
        provide(firebaseRef, {useClass: FirebaseStub}),
        provide(AuthService, {useClass: AuthServiceStub})
      ]);
    });

    it('should set `ref` with correct firebase child path', () => {
      let ref = injector.get(firebaseRef);
      let spy = sinon.spy(ref, 'child');

      let auth = injector.get(AuthService);
      injector.get(TaskService);

      expect(spy.calledWith(`tasks/${auth.id}`)).toBe(true);
    });


    describe('Creating a task', () => {
      it('should push new task to firebase', () => {
        let ref = injector.get(firebaseRef);
        let spy = sinon.spy(ref, 'push');

        let taskService = injector.get(TaskService);
        taskService.createTask('test');

        let task = spy.args[0][0];

        expect(task instanceof  Task).toBe(true);
        expect(task.title).toBe('test');
      });
    });


    describe('Deleting a task', () => {
      it('should remove task from correct firebase path', () => {
        let ref = injector.get(firebaseRef);
        let childSpy = sinon.spy(ref, 'child');
        let removeSpy = sinon.spy(ref, 'remove');

        let task = new Task('test');
        task.key = '456';

        let taskService = injector.get(TaskService);
        taskService.deleteTask(task);

        expect(childSpy.calledWith(task.key)).toBe(true);
        expect(removeSpy.callCount).toBe(1);
      });
    });


    describe('Updating a task', () => {
      it('should update task at correct firebase path', () => {
        let ref = injector.get(firebaseRef);
        let childSpy = sinon.spy(ref, 'child');
        let updateSpy = sinon.spy(ref, 'update');

        let task = new Task('test');
        task.key = '456';

        let changes = {title: 'changed title'};

        let taskService = injector.get(TaskService);
        taskService.updateTask(task, changes);

        expect(childSpy.calledWith(task.key)).toBe(true);
        expect(updateSpy.calledWith(changes)).toBe(true);
      });
    });
  });
}
