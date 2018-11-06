import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PlanningSessionResponse } from '../models/type-definitions';
import { FirebaseDataAccessService, PLANNING_SESSIONS_REF } from '../services/firebase-data-access.service';
import { throwError } from 'rxjs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { MyErrorStateMatcher } from 'app/commons/forms.utils.common';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTittle = 'Welcome to Open Planning Poker';

  joinForm: FormGroup;
  matcher: MyErrorStateMatcher;

  constructor(
    private userService: UserService,
    private dataAccess: FirebaseDataAccessService,
    private router: Router
    ) {
      this.joinForm = new FormGroup({
        'planningId': new FormControl('', [
          Validators.required
        ]),
        'guestEmail': new FormControl('', [
          Validators.required,
          Validators.email,
        ])
      });
      this.matcher = new MyErrorStateMatcher();
    }

  ngOnInit() {
    this.userService.anonymousLogin().then((u) => {
    });
  }

  validatePlanning(): void {
    this.dataAccess.getByKey<PlanningSessionResponse>(PLANNING_SESSIONS_REF, this.joinForm.get("planningId").value)
      .valueChanges()
        .pipe(
          map((planningSession: PlanningSessionResponse) => {
            if (!planningSession) {
              throw new Error('Planning does not exist.');
            }
            return planningSession;
          })
          , catchError( error => throwError(error))
        )
        .subscribe((planningSession: PlanningSessionResponse) => {
          this.router.navigate(['/planning', this.joinForm.get("planningId").value], { queryParams: { userEmail: this.joinForm.get("guestEmail").value } });
    }, (error) => console.log(error));
  }
}