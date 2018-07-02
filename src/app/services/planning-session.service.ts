import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import PlanningSession from '../models/planning-session';

@Injectable()
export class PlanningSessionService {

    private planningSessionsRef;
    constructor(private dbRef: AngularFireDatabase) {
        this.planningSessionsRef = dbRef.list('planningSession');
    }

    getAllActiveSesssions(): PlanningSession[] {
        return this.planningSessionsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    getCurrentPlanningSessionByKey(key: string): AngularFireObject<{}> {
        return this.dbRef.object(`planningSession/${key}`);
    }

    updatePlanningSession(key: string, planningSession: PlanningSession) {
        return this.dbRef.object(`planningSession/${key}`).update(planningSession);
    }

}
