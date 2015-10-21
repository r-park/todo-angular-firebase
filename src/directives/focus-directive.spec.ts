import { Component, View } from 'angular2/angular2';
import {
  describe,
  expect,
  injectAsync,
  xit,
  RootTestComponent,
  TestComponentBuilder } from 'angular2/testing';
import { FocusDirective } from './focus-directive';


@Component({selector: 'test-cmp'})
@View({directives: [FocusDirective]})
class TestComponent {
  shouldFocus: boolean;
}


export function main(): void {
  describe('FocusDirective', () => {
    xit('should call `focus()` on element when bound expression evaluates to `true`', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return new Promise((resolve: (value?: any) => void) => {
        let template: string = `<input [focus]="shouldFocus" type="text">`;

        tcb.overrideTemplate(TestComponent, template)
          .createAsync(TestComponent)
          .then((rootTC: RootTestComponent) => {
            let element: any = rootTC.debugElement.componentViewChildren[0].nativeElement;
            element.focus = sinon.spy();

            rootTC.debugElement.componentInstance.shouldFocus = true;
            rootTC.detectChanges();

            setTimeout(() => {
              expect(element.focus.callCount).toBe(1);

              rootTC.debugElement.componentInstance.shouldFocus = false;
              rootTC.detectChanges();

              setTimeout(() => {
                expect(element.focus.callCount).toBe(1);
                resolve();
              });
            });
          });
      });
    }));
  });
}
