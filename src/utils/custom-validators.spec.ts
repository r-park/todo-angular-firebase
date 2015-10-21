import { Control } from 'angular2/angular2';
import {
  describe,
  expect,
  it
} from 'angular2/testing';
import { CustomValidators } from './custom-validators';


export function main(): void {
  describe('CustomValidators', () => {
    it('should error on an empty string', () => {
      expect(CustomValidators.required(new Control(''))).toEqual({required: true});
    });

    it('should error on a string comprised of multiple spaces', () => {
      expect(CustomValidators.required(new Control('     '))).toEqual({required: true});
    });

    it('should error on null', () => {
      expect(CustomValidators.required(new Control(null))).toEqual({required: true});
    });

    it('should not error on a non-empty string', () => {
      expect(CustomValidators.required(new Control('not empty'))).toEqual(null);
    });

  });
}
