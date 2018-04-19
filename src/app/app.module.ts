import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanningRoomComponent } from './planning-room/planning-room.component';
import { HeaderPageComponent } from './header-page/header-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningRoomComponent,
    HeaderPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
