import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CompInteractionService} from '../services/component.interaction/comp.interaction.service';

@Component({
  selector: 'app-emmitter',
  styles: [`
      div {
          cursor: pointer;
          width: 100px;
          height: 25px;
          border: 1px solid silver;
      }
  `],
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
