import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { StorySession, Vote, PlanningSessionResponse, Participant, StorySessionResponse } from '../models/type-definitions';
import { PlanningSessionService } from '../services/planning-session.service';

@Component({
  templateUrl: './planning-room.component.html',
  styleUrls: ['./planning-room.component.css']
})
export class PlanningRoomComponent implements OnInit, OnDestroy {

  public userEmail: any;
  public shortName: any;
  public key: any;
  public currentPlanningSession: PlanningSessionResponse;
  public storySessionList: StorySession[];
  public activeSession: any;
  public votes: Vote[];
  public isSessionGrommed: boolean;
  private subsctiptions$: Subscription[];
  public participants: Participant[];
  public filteredParticipantsLength: number;

  constructor(
    private route: ActivatedRoute,
    private planningSessionService: PlanningSessionService) { }


  ngOnInit() {


    this.subsctiptions$ = [];

    // Subscribe to the userEmail and Name
    this.subsctiptions$.push(this.route.queryParams
      .subscribe(params => {
        this.userEmail = params['userEmail'];
        this.shortName = params['shortName']
      })
    );

    // Get key
    this.key = this.route.snapshot.paramMap.get('key');

    // Subscribe to planning
    this.subsctiptions$.push(
      this.planningSessionService.getPlanningByKey(this.key)
    .subscribe(planning => {
      this.currentPlanningSession = planning;
      this.participants = this.currentPlanningSession.participants;
      this.validateAndPersistIfParticipantNotExists();
    }));

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

  validateAndPersistIfParticipantNotExists() {
    this.filteredParticipantsLength = this.participants.filter(participant => participant.email === this.userEmail).length;
    if (this.filteredParticipantsLength == 0) {
      this.participants.push(new Participant(this.userEmail));
      this.currentPlanningSession.participants = this.participants;
      this.currentPlanningSession.storySessions.map(storySession => {
      if (!storySession.grommed) {
        storySession.votes.push(new Vote(this.userEmail, this.shortName));
        return storySession;
      }});
      this.planningSessionService.updatePlanningByKey(this.key, this.currentPlanningSession);
    }
  }
}
