declare module 'angular2/src/core/facade/async' {
  export class ObservableWrapper {
    static subscribe(emitter: any, onNext: Function, onThrow?: Function, onReturn?: Function);
  }

  export interface PromiseCompleter<R> {
    promise: Promise<R>;
    resolve: (value?: R | PromiseLike<R>) => void;
    reject: (error?: any, stackTrace?: string) => void;
  }

  export class PromiseWrapper {
    static all(promises: any[]): Promise<any>;
    static catchError<T>(promise: Promise<T>, onError: (error: any) => T | PromiseLike<T>): Promise<T>;
    static completer(): PromiseCompleter<any>;
    static reject(obj: any, _): Promise<any>;
    static resolve<T>(obj: T): Promise<T>;
    static then<T, U>(promise: Promise<T>, success: (value: T) => U | PromiseLike<U>, rejection?: (error: any, stack?: any) => U | PromiseLike<U>): Promise<U>;
    static wrap<T>(computation: () => T): Promise<T>;
  }
}


declare module 'angular2/src/core/facade/browser' {
  var document: Document;
  var location: Location;
  var window: Window;
}


declare module 'angular2/src/core/facade/lang' {
  class Json {
    static parse(s: string): any;
    static stringify(data: Object): string;
  }

  function CONST(): ClassDecorator;
  function isPresent(obj: any): boolean;
  function isBlank(obj: any): boolean;
  function isString(obj: any): boolean;
  function isFunction(obj: any): boolean;
  function isType(obj: any): boolean;
  function isStringMap(obj: any): boolean;
  function isPromise(obj: any): boolean;
  function isArray(obj: any): boolean;
  function isNumber(obj: any): boolean;
  function isDate(obj: any): boolean;
}


declare module 'angular2/test' {
  class AsyncTestCompleter {
    constructor(_done: Function);
    done(): void;
  }

  class SpyObject {
    constructor(type?: any);
    static stub(object?: any, config?: any, overrides?: any): void;
    noSuchMethod(args: any): void;
    spy(name: any): void;
    prop(name: any, value: any): void;
  }

  interface RootTestComponent {
    debugElement: ng.DebugElement;
    detectChanges(): void;
    destroy(): void;
  }

  class TestComponentBuilder {
    constructor(_injector: ng.Injector);
    overrideTemplate(componentType: any, template: string): TestComponentBuilder;
    overrideView(componentType: any, view: any): TestComponentBuilder;
    overrideDirective(componentType: any, from: any, to: any): TestComponentBuilder;
    overrideBindings(type: any, bindings: any[]): TestComponentBuilder;
    overrideViewBindings(type: any, bindings: any[]): TestComponentBuilder;
    createAsync(rootComponentType: any): any;

  }

  function afterEach(fn: Function): void;
  function beforeEach(fn: Function): void;
  function beforeEachBindings(fn: any): void;
  function describe(...args: any[]): void;
  function ddescribe(...args: any[]): void;
  function xdescribe(...args: any[]): void;
  function expect(actual: any): any;
  function it(name: any, fn: any, timeOut?: any): void;
  function xit(name: any, fn: any, timeOut?: any): void;
  function iit(name: any, fn: any, timeOut?: any): void;

  function inject(tokens: any[], fn: Function);
}
