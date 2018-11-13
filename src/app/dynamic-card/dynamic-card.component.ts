import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css'],
  animations: [
    trigger('flipState', [
      state('hidden', style({
        transform: 'rotateY(0)'
      })),
      state('fliped', style({
        transform: 'rotateY(179.9deg)'
      })),
      transition('hidden => fliped', animate('3000ms ease-out')),
      transition('fliped => hidden', animate('3000ms ease-in'))
    ])]
})
export class DynamicCardComponent implements OnInit {

  @Input() votedCard: any;
  @Input() sessionGrommed: boolean;
  @Input() participantName: string;

  constructor() { }

  ngOnInit() {
  }

  getCardImagePath() {
    return `assets/images/cards/b-${this.votedCard}.png`;
  }



}
