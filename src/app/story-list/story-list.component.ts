import { Component, Input, OnInit } from '@angular/core';
import { StorySession } from '../models/type-definitions';
import { FirebaseDataAccessService } from '../services/firebase-data-access.service';

@Component({
  selector: 'story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  @Input() stories: StorySession[];

  constructor(private dataAccess: FirebaseDataAccessService) {
  }

  ngOnInit(): void {
  }
}

