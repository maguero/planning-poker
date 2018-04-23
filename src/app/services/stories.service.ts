import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StoriesService {

  storiesRef: AngularFireList<any>;
  stories: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.storiesRef = this.db.list('stories');
    // Use snapshotChanges().map() to store the key
    this.stories = this.storiesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getStoryList(): Observable<{}[]> {
    return this.stories;
  }

  updateItem(key: string, storyPoints: number)  {
    this.storiesRef.update(key, { points: storyPoints });
  }
}
