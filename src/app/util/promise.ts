export class Defer<T> {
  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;

  constructor() {
    this.promise = new Promise<T>((resolve: (value?: T | PromiseLike<T>) => void, reject: (error?: any) => void) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
