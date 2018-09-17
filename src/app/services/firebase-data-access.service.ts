import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export const STORIES_REF = 'stories';
export const PLANNING_SESSIONS_REF = 'planningSession';

@Injectable()
export class FirebaseDataAccessService {
    constructor(private db: AngularFireDatabase) {
    }

    getAll<T>(dbRef: string): Observable<T[]> {
        return this.db.list(dbRef).snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    getByKey<T>(dbRef: string, key: string): AngularFireObject<T> {
        return this.db.object(`${dbRef}/${key}`);
    }

    addNew<T>(dbRef: string, data: T) {
        this.db.list(dbRef).push(data);
    }

    updateByKey<T>(dbRef: string, key: string, data: any) {
        this.db.list(dbRef).update(key, data);
    }

    getByQuery<T>(dbRef: string, fieldName: string, fieldValue: any): AngularFireList<T> {
        return this.db.list(dbRef, ref => ref.orderByChild(fieldName).equalTo(fieldValue))
    }

    removebyKey<T>(dbRef: string, key: string): Promise<void> {
        return this.db.object(`${dbRef}/${key}`).remove();
    }


}
