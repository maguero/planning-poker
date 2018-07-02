import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {

  userName: string;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.userName = this._userService.getUserName()
  }

}
