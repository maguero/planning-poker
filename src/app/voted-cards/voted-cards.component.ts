import { Component, Input, OnInit } from '@angular/core';
import { Vote } from 'app/models/type-definitions'

@Component({
  selector: 'voted-cards',
  templateUrl: './voted-cards.component.html',
  styleUrls: ['./voted-cards.component.css']
})
export class VotedCardsComponent implements OnInit {

  @Input() votes: Vote[]
  @Input() sessionGrommed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
