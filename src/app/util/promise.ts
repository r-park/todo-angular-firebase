export class Defer<R> {
  promise: Promise<R>;
  resolve: (value?: R | Thenable<R>) => void;
  reject: (error?: any) => void;

  constructor() {
    this.promise = new Promise<R>((resolve: (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}
