import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CompInteractionService } from './services/component.interaction/comp.interaction.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CompInteractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
