import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[autofocus]'
})

export class Autofocus {
  constructor(element: ElementRef) {
    element.nativeElement.focus();
  }
}
