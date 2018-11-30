import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {

  @Input() userEmail: string;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  vote(cardNumber: number) {
    this.valueChange.emit({ userEmail: this.userEmail, cardNumber });
  }

}
