import { Component, OnInit, Input } from '@angular/core';
import { FirebaseDataAccessService, STORIES_REF } from '../services/firebase-data-access.service';
import { StoriesSession } from '../models/type-definitions';

@Component({
  selector: 'story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  @Input('stories') stories: StoriesSession[];

  constructor(private dataAccess: FirebaseDataAccessService) {
  }

  ngOnInit(): void {
  }
}

