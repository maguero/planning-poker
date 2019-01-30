import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input()
  public size: string;

  public diameter: number;

  constructor() { }

  ngOnInit() {
    switch (this.size) {
      case "small":
        this.diameter = 20;
        break;
      case "medium":
        this.diameter = 50;
        break;
      case "large":
        this.diameter = 90;
        break;
      default:
        this.diameter = 100;
    };
  }

}
