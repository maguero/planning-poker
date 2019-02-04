import { Component, OnInit, Input } from '@angular/core';
import { StorySession } from 'app/models/type-definitions';

@Component({
  selector: 'status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  @Input() activeSession: StorySession;
  @Input() sessionGrommed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
