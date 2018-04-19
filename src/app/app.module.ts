import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanningRoomComponent } from './planning-room/planning-room.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
