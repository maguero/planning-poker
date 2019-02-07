import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  @Input() 
  selectedTheme: string;
  @Output()
  selectedThemeChange: EventEmitter<string> = new EventEmitter();
  
  private readonly logoImagesPath: string = "assets/images/logo/";
  private readonly logoImagesSuffix: string =  "-logo.png";
  public selectedThemeLogoPath: string;
  public userEmail: string;

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit() {

    // Subscribe to the userEmail
    this.route.queryParams
      .subscribe(params => {
        this.userEmail = params['userEmail'];
      });

    this.changeLogo(this.selectedTheme);
  }

  navigateHome(): void {
    this.router.navigate(['/home']);
  }

  navigateDebug(): void {
    this.router.navigate(['/debug']);
  }

  changeTheme(theme: string) {
    this.selectedTheme = Themes[theme];
    this.changeLogo(this.selectedTheme);
    this.selectedThemeChange.emit(this.selectedTheme);
  }

  changeLogo(logoName: String){
    this.selectedThemeLogoPath = this.logoImagesPath + logoName + this.logoImagesSuffix;
  }
}
