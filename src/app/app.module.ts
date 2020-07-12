import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InterractCompModule } from './modules/interractComp.module';

import { AppComponent } from './app.component';

import { CompInteractionService } from './services/component.interaction/comp.interaction.service';
import { ExtIntercationService } from './services/component.interaction/ext.intercation.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterractCompModule
  ],
  providers: [
    CompInteractionService,
    ExtIntercationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
