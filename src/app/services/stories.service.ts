import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class StoriesService {

  constructor(private db: AngularFireDatabase) {

  }

}
