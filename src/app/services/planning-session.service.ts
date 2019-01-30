import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlanningSessionResponse, Story, StorySession, StorySessionResponse, Vote } from '../models/type-definitions';
import { FirebaseDataAccessService, PLANNING_SESSIONS_REF, STORIES_REF } from './firebase-data-access.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class PlanningSessionService {

    private planning$: Observable<PlanningSessionResponse>;
    private storySessions$: Observable<any>;
    private votes$: Observable<any>;
    private activeSession$: Observable<any>;

    constructor(private dataAccess: FirebaseDataAccessService, private db: AngularFireDatabase) {
    }


    getPlanningByKey(key: string): Observable<PlanningSessionResponse> {
        this.planning$ = this.dataAccess.getByKey<PlanningSessionResponse>(PLANNING_SESSIONS_REF, key).valueChanges();
        return this.planning$;
    }

    getStorySessions(): Observable<StorySession[]> {
        this.storySessions$ = this.planning$
            .pipe(
                map((planning: PlanningSessionResponse) => planning.storySessions),
                map((response: StorySessionResponse[]) =>
                    response.map((storySessionResponse: StorySessionResponse) => {
                        return {
                            ...storySessionResponse,
                            story: this.dataAccess.getByKey<Story>(STORIES_REF, storySessionResponse.storyId).valueChanges()
                        }
                    })
                )
            );
        return this.storySessions$;
    }


    getActiveStorySession(planningSessionId: string): Observable<StorySession> {
        // TODO pasar parametro planning iD
        this.activeSession$ = this.dataAccess
            .getByQuery<StorySessionResponse>(`${PLANNING_SESSIONS_REF}/${planningSessionId}/storySessions`, 'status', 'ACTIVE')
            .valueChanges()
            .pipe(
                map(response => {
                    if (response[0]) {
                        return {
                            ...response[0],
                            story: this.dataAccess.getByKey<Story>(STORIES_REF, response[0].storyId).valueChanges()
                        }
                    }
                })
            );
        return this.activeSession$;
    }


    getStorySessionVotes(): Observable<Vote[]> {
        this.votes$ = this.activeSession$
            .pipe(
                map((s: StorySessionResponse) => {
                    if (s) {
                        return s.votes;
                    }
                })
            );
        return this.votes$;
    }

    updatePlanningByKey(key: string, data: any) {
        this.dataAccess.updateByKey<PlanningSessionResponse>(PLANNING_SESSIONS_REF, key, data);
    }
}
