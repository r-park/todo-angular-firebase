export class AuthService {
  private authData: FirebaseAuthData;

  constructor(private ref: Firebase) {
    this.authData = this.ref.getAuth();
  }

  get authenticated(): boolean {
    return this.authData !== null;
  }

  get id(): string {
    return this.authenticated ? this.authData.uid : '';
  }

  signInWithGithub(): Promise<any> {
    return this.authWithOAuth('github');
  }

  signInWithGoogle(): Promise<any> {
    return this.authWithOAuth('google');
  }

  signInWithTwitter(): Promise<any> {
    return this.authWithOAuth('twitter');
  }

  signOut(): void {
    this.ref.unauth();
  }

  subscribe(callback: (authData: FirebaseAuthData) => void): any {
    this.ref.onAuth(callback);
    return () => this.ref.offAuth(callback);
  }

  private authWithOAuth(provider: string): Promise<any> {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      this.ref.authWithOAuthPopup(provider, (error: Error, authData: FirebaseAuthData) => {
        if (error) {
          console.error('ERROR @ AuthService#authWithOAuth :', error);
          reject(error);
        }
        else {
          this.authData = authData;
          resolve();
        }
      });
    });
  }
}
