import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable()
export class PlanningSessionService {

    constructor(private dbRef: AngularFireDatabase) {
    }
}
