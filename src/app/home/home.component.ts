import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PlanningSessionService } from '../services/planning-session.service';
import { PlanningSessionResponse } from '../models/type-definitions';
import { FirebaseDataAccessService, PLANNING_SESSIONS_REF } from '../services/firebase-data-access.service';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTittle = 'Welcome to Open Planning Poker';
  msg: string; // use for any message
  userName: string;
  email: string;
  planningSessionList: Observable<PlanningSessionResponse[]>;

  constructor(
    private userService: UserService,
    private dataAccess: FirebaseDataAccessService) {
  }

  ngOnInit() {
    this.userService.anonymousLogin().then((u) => {
      this.dataAccess.getAll<PlanningSessionResponse>(PLANNING_SESSIONS_REF).subscribe((r) => {
        this.planningSessionList = r;
      });
    });
  }

  validateUser(): void {
    this.userService.setUserName(this.userName);
  }
}

