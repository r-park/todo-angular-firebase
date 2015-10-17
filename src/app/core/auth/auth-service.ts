import { Inject } from 'angular2/angular2';
import { PromiseWrapper } from 'angular2/src/core/facade/async';
import { firebaseRef } from 'app/core/firebase/firebase-ref';


export class AuthService {
  private authData: FirebaseAuthData;
  private ref: Firebase;

  constructor(@Inject(firebaseRef) ref: Firebase) {
    this.ref = ref;
  }

  get id(): string {
    return this.authData.uid;
  }

  authenticate(): Promise<FirebaseAuthData> {
    return new Promise((resolve: (value?: any) => void, reject: (error?: any) => void) => {
      this.ref.authAnonymously((error: Error, authData: FirebaseAuthData) => {
        if (!error) {
          this.authData = authData;
          resolve(authData);
        }
        else {
          reject(error);
        }
      });
    });
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
