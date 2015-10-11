import {
  Directive,
  ElementRef,
  Inject,
  OnDestroy
} from 'angular2/angular2';


@Directive({
  properties: [ 'focus' ],
  selector: '[focus]'
})


export class FocusDirective implements OnDestroy {
  element: ElementRef;
  private timeout: number;

  constructor(@Inject(ElementRef) element: ElementRef) {
    this.element = element;
  }

  set focus(value: boolean) {
    this.clear();
    if (value === true) {
      this.timeout = setTimeout(() => {
        this.element.nativeElement.focus();
      });
    }
  }

  clear(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  onDestroy(): void {
    this.clear();
  }
}
