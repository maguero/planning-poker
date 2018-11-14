import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateHome(): void {
    this.router.navigate(
      ['/home']
    );
  }

  navigateDebug(): void {
    this.router.navigate(
      ['/debug']
    );
  }

}
