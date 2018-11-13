import { Component, Input, OnInit } from '@angular/core';
import { Participants, StorySession, Vote } from '../models/type-definitions';

@Component({
  selector: 'debug-info',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {

  @Input() participants: Participants[];
  @Input() votes: Vote[];
  @Input() activeSession: StorySession;
  @Input() storySessionList: StorySession[];

  constructor() { }

  ngOnInit() {
  }

}
