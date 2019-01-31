import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

enum Themes {
  TEAL = 'teal-theme',
  BLUE = 'light-blue-theme',
  PINK = 'pink-theme',
  ORANGE = 'deep-orange-theme'
}

@Component({
  selector: 'header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  @Output()
  selectedTheme: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateHome(): void {
    this.router.navigate(['/home']);
  }

  navigateDebug(): void {
    this.router.navigate(['/debug']);
  }

  changeTheme(theme: string) {
    this.selectedTheme.emit(Themes[theme]);
  }
}
