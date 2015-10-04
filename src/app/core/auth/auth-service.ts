import { Inject } from 'angular2/angular2';
import { PromiseWrapper } from 'angular2/src/core/facade/async';
import { Defer } from 'app/util/promise';
import { firebaseRef } from 'app/core/firebase/firebase-ref';


export class AuthService {
  private authData: FirebaseAuthData = null;
  private ref: Firebase;

  constructor(@Inject(firebaseRef) ref: Firebase) {
    this.ref = ref;
  }

  get id(): string {
    return this.authData.uid;
  }

  authenticate(): Promise<FirebaseAuthData> {
    let deferred: Defer<FirebaseAuthData> = new Defer();

    this.ref.authAnonymously((error: Error, authData: FirebaseAuthData) => {
      if (!error) {
        this.authData = authData;
        deferred.resolve(authData);
      }
      else {
        deferred.reject(error);
      }
    });

    return deferred.promise;
  }

  ensureAuth(): Promise<FirebaseAuthData> {
    this.authData = this.ref.getAuth();
    if (this.authData) {
      return PromiseWrapper.resolve(this.authData);
    }
    else {
      return this.authenticate();
    }
  }

  unauth(): void {
    this.ref.unauth();
  }
}
