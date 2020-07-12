import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CompInteractionService} from '../services/component.interaction/comp.interaction.service';

@Component({
  selector: 'app-emmitter',
  template: `
    <input type="text" #inputEmmitter>
  `
})
export class EmmiterComponent implements AfterViewInit {

  constructor(private interractionSvc: CompInteractionService) {
  }

  @ViewChild('inputEmmitter') inputEmmitter;

  ngAfterViewInit(): void {
    this.interractionSvc.subscribeOnEvent(this.inputEmmitter.nativeElement, 'input');
  }
}
