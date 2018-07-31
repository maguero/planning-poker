import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

  userName: string;

  constructor(private afa: AngularFireAuth) { }

  anonymousLogin(): Promise<any> {
    return this.afa.auth.signInAnonymously();
  }

  // define getter a setter for userName  to be shared between component throgh userService
  getUserName() {
    return this.userName;
  }

  setUserName(_username: string) {
    this.userName = _username;
  }

}
