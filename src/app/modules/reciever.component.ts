import { AfterViewInit, Component } from '@angular/core';
import { CompInteractionService } from '../services/component.interaction/comp.interaction.service';

@Component({
  selector: 'app-reciever',
  template: `
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
