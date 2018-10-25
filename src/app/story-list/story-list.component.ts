import { Component, OnInit, Input } from '@angular/core';
import { FirebaseDataAccessService, STORIES_REF } from '../services/firebase-data-access.service';
import { StorySession } from '../models/type-definitions';

@Component({
  selector: 'story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  @Input('stories') stories: StorySession[];

  constructor(private dataAccess: FirebaseDataAccessService) {
  }

  ngOnInit(): void {
  }
}

