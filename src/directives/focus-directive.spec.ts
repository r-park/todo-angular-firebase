import { Component, View } from 'angular2/angular2';
import {
  AsyncTestCompleter,
  describe,
  expect,
  inject,
  it,
  RootTestComponent,
  TestComponentBuilder } from 'angular2/testing_internal';
import { FocusDirective } from './focus-directive';


@Component({selector: 'test-cmp'})
@View({directives: [FocusDirective]})
class TestComponent {
  shouldFocus: boolean;
}


export function main(): void {
  describe('FocusDirective', () => {
    it('should call `focus()` on element when bound expression evaluates to `true`', inject([TestComponentBuilder, AsyncTestCompleter], (tcb: TestComponentBuilder, async: AsyncTestCompleter) => {
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
              async.done();
            });
          });
        });
    }));
  });
}
