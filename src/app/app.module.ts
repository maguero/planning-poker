/* ====== ANGULAR MODULES ====== */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* ====== THIRD PARTY MODULES ====== */
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

/* ====== CUSTOM MODULES ====== */
import { StoriesService } from './services/stories.service';
import { UserService } from './services/user.service';
import { PlanningGuardService } from './planning-room/planning-guard.service';

/* ====== APPLICATION COMPONENTS ====== */
import { AppComponent } from './app.component';
import { PlanningRoomComponent } from './planning-room/planning-room.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { HomeComponent } from './home/home.component';
import { VotedCardsComponent } from './voted-cards/voted-cards.component';

/* ====== OTHER IMPORTS ====== */
import { environment } from '../environments/environment';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { PlanningSessionService } from './services/planning-session.service';
import { FirebaseDataAccessService } from './services/firebase-data-access.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* ====== ANGULAR MATERIAL ====== */
import { MaterialCommonModule } from './commons/material.common.module';

@NgModule({
  declarations: [
    AppComponent,
    PlanningRoomComponent,
    HeaderPageComponent,
    StoryListComponent,
    StatusBarComponent,
    MyCardsComponent,
    HomeComponent,
    VotedCardsComponent,
    StoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([ // routes from specific to general.. position matters!!!
      { path: 'home', component: HomeComponent },
      {
        path: 'planning/:key',
        component: PlanningRoomComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule,
    MaterialCommonModule
  ],
  providers: [
    AngularFireDatabase,
    StoriesService,
    AngularFireAuth,
    UserService,
    PlanningGuardService,
    PlanningSessionService,
    FirebaseDataAccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
