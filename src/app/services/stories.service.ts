import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class StoriesService {

  constructor(private db: AngularFireDatabase) {

  }

}
