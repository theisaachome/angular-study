import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeDateComponent } from './pipe-date/pipe-date.component';
import { PowerAndExponentComponent } from './power-and-exponent/power-and-exponent.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { LeaderPipe } from './leader.pipe';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PipeDateComponent,
    PowerAndExponentComponent,
    ExponentialStrengthPipe,
    LeaderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
