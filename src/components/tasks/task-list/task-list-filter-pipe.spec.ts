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

import { TaskListFilterPipe } from './task-list-filter-pipe';


describe('TaskListFilterPipe', () => {
  let pipe: TaskListFilterPipe;
  let list: any[];

  beforeEach(() => {
    list = [{completed: true}, {completed: false}];
    pipe = new TaskListFilterPipe();
  });

  it('should return provided list if param `filterType` is not provided', () => {
    expect(pipe.transform(list)).toBe(list);
    expect(pipe.transform(list, [])).toBe(list);
  });

  it('should return list of active tasks if param `filterType` is `active`', () => {
    expect(pipe.transform(list, ['active'])).toEqual([{completed: false}]);
  });

  it('should return list of active tasks if param `filterType` is `completed`', () => {
    expect(pipe.transform(list, ['completed'])).toEqual([{completed: true}]);
  });

  it('should return provided list if param `filterType` is not `active` or `completed`', () => {
    expect(pipe.transform(list, [''])).toBe(list);
  });

  it('should return provided list if list is undefined and filter is provided', () => {
    list = undefined;
    expect(pipe.transform(list, ['active'])).toBe(list);
  });
});
