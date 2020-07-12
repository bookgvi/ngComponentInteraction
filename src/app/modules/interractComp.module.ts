import { NgModule } from '@angular/core';

import { EmmiterComponent } from './emmiter.component';
import { RecieverComponent } from './reciever.component';

@NgModule({
  exports: [
    EmmiterComponent,
    RecieverComponent
  ],
  declarations: [
    EmmiterComponent,
    RecieverComponent
  ]
})
export class InterractCompModule {
}
