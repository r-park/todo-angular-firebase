import { Control } from 'angular2/angular2';


export class CustomValidators {
  static required(control: Control): {[key: string]: boolean} {
    if (control.value === null) return {required: true};
    return control.value.trim().length === 0 ? {required: true} : null;
  }
}
