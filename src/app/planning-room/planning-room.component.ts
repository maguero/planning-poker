import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseDataAccessService, PLANNING_SESSIONS_REF, STORIES_REF } from '../services/firebase-data-access.service';
import { Story, StoriesSession, PlanningSessionResponse, STORY_SESSION_STATUS } from '../models/type-definitions';


@Component({
  // selector: 'planning-room', no longer needed if routing is used. Use selector for nested components
  templateUrl: './planning-room.component.html',
  styleUrls: ['./planning-room.component.css']
})
export class PlanningRoomComponent implements OnInit, OnDestroy {

  private planningSessionSubcription$: Subscription;
  private storiesSubcription$: Subscription;
  public currentPlanningSession: any;
  // Contiene la lista de stories que corresponden a la planning session con su información completa
  public storySessionList: StoriesSession[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataAccessService: FirebaseDataAccessService) { }

  ngOnInit() {
    this.planningSessionSubcription$ = this.route.params.subscribe(params => {

      this.planningSessionSubcription$ = this.dataAccessService.getByKey<PlanningSessionResponse>(PLANNING_SESSIONS_REF, params['key'])
        .valueChanges()
        .subscribe((planningSession: PlanningSessionResponse) => {
          this.currentPlanningSession = planningSession;

          // Buscar las stories para completar la información
          planningSession.storySessions.forEach((storySession) => {
            this.storiesSubcription$ = this.dataAccessService.getByQuery<Story>(STORIES_REF, 'id', storySession.storyId)
              .valueChanges()
              .subscribe((stories: Story[]) => {
                this.storySessionList.push({
                  id: storySession.id,
                  status: storySession.status,
                  storyPoints: storySession.storyPoints,
                  story: stories[0] // Suponemos que seria siempre solo un elemento
                });
              });
          });
        });
    });
  }

  ngOnDestroy(): void {
    this.planningSessionSubcription$.unsubscribe();
    this.storiesSubcription$.unsubscribe();
  }

}
