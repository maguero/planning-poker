import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Participant, StorySession, Vote, PlanningSessionResponse } from '../models/type-definitions';
import { PlanningSessionService } from '../services/planning-session.service';

@Component({
  templateUrl: './planning-room.component.html',
  styleUrls: ['./planning-room.component.css']
})
export class PlanningRoomComponent implements OnInit, OnDestroy {

  public userEmail: any;
  public key: any;
  public currentPlanningSession: PlanningSessionResponse;
  public storySessionList: StorySession[];
  public activeSession: any;
  public isSessionGrommed: boolean;
  public votes: Vote[];
  private subsctiptions$: Subscription[];
  public activeStorySessionStatus: any;
  public participants: Participant[];
  public participant: Participant;
  public filteredParticipantsLength: number;

  constructor(
    private route: ActivatedRoute,
    private planningSessionService: PlanningSessionService) { }

  ngOnInit() {

    this.subsctiptions$ = [];
    // Subscribe , async pipe does not work with derived observables using pipe

    // Subscribe to the userEmail
    this.subsctiptions$.push(this.route.queryParams
      .subscribe(params => this.userEmail = params['userEmail'])
    );

    // Get key and userEmail
    this.key = this.route.snapshot.paramMap.get('key');

    // Subscribe to planning
    this.subsctiptions$.push(this.route.params
      .pipe(
        concatMap(params => this.planningSessionService.getPlanningByKey(this.key))
      ).subscribe(planning => {
        this.currentPlanningSession = planning;
        this.participants = this.currentPlanningSession.participants;
        this.validateParticipantExists();
      })
    );

    // Subscribe to list of story sessions
    this.subsctiptions$.push(this.planningSessionService.getStorySessions()
      .subscribe(storySessionList => this.storySessionList = storySessionList));

    // Get active story session
    this.subsctiptions$.push(this.route.params
      .pipe(
        concatMap(params => this.planningSessionService.getActiveStorySession(this.key))
      ).subscribe(activeStory => {
        this.activeSession = activeStory;
        this.isSessionGrommed = this.activeSession.grommed;
        this.activeStorySessionStatus = this.activeSession.status;
      }));

    // Subscribe to session votes
    this.subsctiptions$.push(this.planningSessionService.getStorySessionVotes()
      .subscribe(votes => this.votes = votes));

  }

  ngOnDestroy(): void {
    this.subsctiptions$.forEach(s => s.unsubscribe());
  }

  validateParticipantExists() {
    this.filteredParticipantsLength = this.participants.filter(participant => participant.email === this.userEmail).length;
    if (this.filteredParticipantsLength == 0) {
      this.participant = new Participant(this.userEmail);
      this.participants.push(this.participant);
      this.currentPlanningSession.participants = this.participants;
      this.planningSessionService.updatePlanningByKey(this.key, this.currentPlanningSession);
    }
  }
}
