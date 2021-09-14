import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTime } from "./directives/app-time.directive";
import { AppIf } from "./directives/app.if.directive";
import { TitleDirective } from "./directives/apptitle.directive";
import { HighlightTextDirective } from "./directives/hightliight-text.directive";

@NgModule({
  declarations: [
    AppComponent,
    HighlightTextDirective,
    TitleDirective,
    AppIf,
    AppTime,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
