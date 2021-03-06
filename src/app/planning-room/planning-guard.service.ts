import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { isNullOrUndefined } from "util";
import { UserService } from '../services/user.service';

@Injectable()
export class PlanningGuardService implements CanActivate {

  constructor(private _router: Router, private _userService: UserService) {
  }

  canActivate(): boolean {
    if (isNullOrUndefined(this._userService.getUserName())) {
      alert('Not User Name defined');
      this._router.navigate(['/home']);
      return false;

    }
    return true;

  }

}
