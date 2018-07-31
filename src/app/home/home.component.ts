import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PlanningSessionService } from '../services/planning-session.service';
import PlanningSession from '../models/planning-session';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page_tittle = 'Welcome to Open Planning Poker';
  btn_join = true;
  btn_start = true;
  msg: string; // use for any message
  userName: string;
  email: string;
  planningSessionList: PlanningSession[];

  constructor(
    private _userService: UserService,
    private planningSessionService: PlanningSessionService) {
    this.planningSessionList = planningSessionService.getAllActiveSesssions();
  }

  ngOnInit() {
  }

  // check user
  validate_user(): void {
    this._userService.setUserName(this.userName);
  }
}

