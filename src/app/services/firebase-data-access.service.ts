import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


export const STORIES_REF = 'stories';
export const PLANNING_SESSIONS_REF = 'planningSession';


@Injectable()
export class FirebaseDataAccessService {

    constructor(private db: AngularFireDatabase) {
    }

    getAll<T>(dbRef: string): Observable<any> {
        return this.db.list(dbRef).snapshotChanges()
            .pipe(
                map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
            )
    }

    getByKey<T>(dbRef: string, key: string): AngularFireObject<T> {
        return this.db.object<T>(`${dbRef}/${key}`);
    }

    addNew<T>(dbRef: string, data: T) {
        this.db.list(dbRef).push(data);
    }

    updateByKey<T>(dbRef: string, key: string, data: any): Promise<void> {
        return this.db.list(dbRef).update(key, data);
    }

    getByQuery<T>(dbRef: string, fieldName: string, fieldValue: any): AngularFireList<T> {
        return this.db.list<T>(dbRef, ref => ref.orderByChild(fieldName).equalTo(fieldValue))
    }

    removebyKey<T>(dbRef: string, key: string): Promise<void> {
        return this.db.object(`${dbRef}/${key}`).remove();
    }


}
