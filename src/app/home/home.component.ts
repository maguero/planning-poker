import {Component, OnInit} from '@angular/core';
import { UserService} from "../services/user.service";


@Component({
  // selector: 'home-component', no longer needed if routing is used Use selector for nested components
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page_tittle: string = 'Welcome to Open Planning Poker';
  btn_join: boolean = true;
  btn_start: boolean = true;
  msg: string = ''; // use for any message
  userName: string;
  email: string;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  // check user
  validate_user(): void {

    this._userService.setUserName(this.userName);
  }
}
