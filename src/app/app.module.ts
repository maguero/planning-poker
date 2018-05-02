/* ====== ANGULAR MODULES ====== */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

/* ====== THIRD PARTY MODULES ====== */
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

/* ====== CUSTOM MODULES ====== */
import {StoriesService} from './services/stories.service';
import {UserService} from './services/user.service';
import { PlanningGuardService } from './planning-room/planning-guard.service';

/* ====== APPLICATION COMPONENTS ====== */
import {AppComponent} from './app.component';
import {PlanningRoomComponent} from './planning-room/planning-room.component';
import {HeaderPageComponent} from './header-page/header-page.component';
import {StoryListComponent} from './story-list/story-list.component';
import {StatusBarComponent} from './status-bar/status-bar.component';
import {MyCardsComponent} from './my-cards/my-cards.component';
import {HomeComponent} from './home/home.component';

/* ====== OTHER IMPORTS ====== */
import {environment} from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    PlanningRoomComponent,
    HeaderPageComponent,
    StoryListComponent,
    StatusBarComponent,
    MyCardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([ //routes from specific to general.. position matters!!!
      {path: 'home', component: HomeComponent},
      {path: 'planning',
        canActivate: [ PlanningGuardService],
        component: PlanningRoomComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ])
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    StoriesService,
    UserService,
    PlanningGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
