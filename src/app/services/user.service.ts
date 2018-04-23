import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

  constructor(private afa: AngularFireAuth) { }

  anonymousLogin(): Promise<any> {
    return this.afa.auth.signInAnonymously();
  }
}
