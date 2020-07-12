import { AfterViewInit, Component } from '@angular/core';
import { CompInteractionService } from '../services/component.interaction/comp.interaction.service';

@Component({
  selector: 'app-reciever',
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
export class RecieverComponent implements AfterViewInit {
  public neighborInputValueFrom: string;

  constructor(private interrcatSvc: CompInteractionService) {
  }

  ngAfterViewInit(): void {
    this.interrcatSvc.getInputValue(this, 'neighborInputValueFrom');
  }

}
