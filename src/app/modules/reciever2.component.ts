import { AfterViewInit, Component } from '@angular/core';
import { CompInteractionService } from '../services/component.interaction/comp.interaction.service';
import { ExtIntercationService } from '../services/component.interaction/ext.intercation.service';

@Component({
  selector: 'app-reciever2',
  styles: [`
      div {
          cursor: pointer;
          width: 170px;
          height: 20px;
          border: 1px solid silver;
      }
  `],
  template: `
    <br />
    <br />
    <div>{{ neighborInputValueFrom }}</div>
  `
})
export class Reciever2Component implements AfterViewInit {
  public neighborInputValueFrom: string;

  constructor(private interrcatSvc: ExtIntercationService) {
  }

  ngAfterViewInit(): void {
    this.interrcatSvc.getInputValue(this, 'neighborInputValueFrom');
  }

}
