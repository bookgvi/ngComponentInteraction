import { NgModule } from '@angular/core';

import { EmmiterComponent } from './emmiter.component';
import { RecieverComponent } from './reciever.component';
import { Reciever2Component } from './reciever2.component';

@NgModule({
  exports: [
    EmmiterComponent,
    RecieverComponent,
    Reciever2Component
  ],
  declarations: [
    EmmiterComponent,
    RecieverComponent,
    Reciever2Component
  ]
})
export class InterractCompModule {
}
