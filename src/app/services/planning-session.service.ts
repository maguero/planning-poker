import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable()
export class PlanningSessionService {

    constructor(private dbRef: AngularFireDatabase) {
    }
}
