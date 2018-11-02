import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PlanningSessionResponse } from '../models/type-definitions';
import { FirebaseDataAccessService, PLANNING_SESSIONS_REF } from '../services/firebase-data-access.service';
import { MaterialCommonModule } from '../commons/material.common.module';
import { throwError } from 'rxjs';
import { Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

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
          this.router.navigate(['/planning', this.joinForm.get("planningId").value]);
    }, (error) => console.log(error));
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

