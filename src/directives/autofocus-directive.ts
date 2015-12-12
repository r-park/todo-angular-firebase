import { Directive, ElementRef } from 'angular2/core';


@Directive({
  selector: '[autofocus]'
})

export class Autofocus {
  constructor(element: ElementRef) {
    element.nativeElement.focus();
  }
}
