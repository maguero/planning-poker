import { Component, OnInit, Input } from '@angular/core';
import { StorySession, Story } from '../models/type-definitions';

@Component({
  selector: 'story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {

  @Input() activeSession: StorySession;

  constructor() { }

  ngOnInit() {
  }

}
