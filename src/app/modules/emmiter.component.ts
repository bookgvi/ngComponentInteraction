import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CompInteractionService} from '../services/component.interaction/comp.interaction.service';
import { ExtIntercationService } from '../services/component.interaction/ext.intercation.service';

@Component({
  selector: 'app-emmitter',
  template: `
    <input type="text" #inputEmmitter>
  `
})
export class EmmiterComponent implements AfterViewInit {

  constructor(private interractionSvc: ExtIntercationService) {
  }

  @ViewChild('inputEmmitter') inputEmmitter;

  ngAfterViewInit(): void {
    this.interractionSvc.subscribeOnEvent(this.inputEmmitter.nativeElement, 'input');
  }
}
