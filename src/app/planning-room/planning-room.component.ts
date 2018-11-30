import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { StorySession, Vote } from '../models/type-definitions';
import { PlanningSessionService } from '../services/planning-session.service';

@Component({
  templateUrl: './planning-room.component.html',
  styleUrls: ['./planning-room.component.css']
})
export class PlanningRoomComponent implements OnInit, OnDestroy {

  public userEmail: any;
  public currentPlanningSession: any;
  public storySessionList: StorySession[];
  public activeSession: any;
  public votes: Vote[];
  public isSessionGrommed: boolean;
  private subsctiptions$: Subscription[];


  constructor(
    private route: ActivatedRoute,
    private planningSessionService: PlanningSessionService) { }


  ngOnInit() {


    this.subsctiptions$ = [];

    // Subscribe to the userEmail
    this.subsctiptions$.push(this.route.queryParams
      .subscribe(params => this.userEmail = params['userEmail'])
    );

    // Subscribe to planning
    this.subsctiptions$.push(this.route.params
      .pipe(
        concatMap(params => this.planningSessionService.getPlanningByKey(params['key']))
      ).subscribe(planning => this.currentPlanningSession = planning)
    );
    // Subscribe to list of story sessions
    this.subsctiptions$.push(this.planningSessionService.getStorySessions()
      .subscribe(storySessionList => this.storySessionList = storySessionList));

    // Get active story session
    this.subsctiptions$.push(this.route.params
      .pipe(
        concatMap(params => this.planningSessionService.getActiveStorySession(params['key']))
      ).subscribe(activeStory => {
        this.activeSession = activeStory;
        this.isSessionGrommed = this.activeSession.grommed;
      }));

    // Subscribe to session votes
    this.subsctiptions$.push(this.planningSessionService.getStorySessionVotes()
      .subscribe(votes => this.votes = votes));

  }


  makeVote(vote: any) {
    console.log('Vote: ' + vote.userEmail + '  ' + vote.cardNumber);
  }

  ngOnDestroy(): void {
    this.subsctiptions$.forEach(s => s.unsubscribe());
  }

}
