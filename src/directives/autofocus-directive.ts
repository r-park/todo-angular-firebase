import { Directive, ElementRef } from 'angular2/angular2';


@Directive({
  selector: '[autofocus]'
})

export class Autofocus {
  constructor(element: ElementRef) {
    element.nativeElement.focus();
  }
}
