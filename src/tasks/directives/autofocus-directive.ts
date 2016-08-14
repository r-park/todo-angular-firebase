import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[autoFocus]'
})

export class AutoFocusDirective implements OnInit {
  constructor(public element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.focus();
  }
}
