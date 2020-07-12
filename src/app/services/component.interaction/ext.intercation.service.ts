import { Injectable } from '@angular/core';
import { CompInteractionService } from './comp.interaction.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ExtIntercationService extends CompInteractionService {

  protected subscription: Subject<HTMLElement>;
  constructor() {
    super();
  }

  public subscribeOnEvent(domEl: HTMLElement, eventName: string): void {
    this.subscription = new Subject();
    const handler: any = (el: HTMLElement) => this.subscription.next(el);
    domEl.addEventListener(eventName, handler);
  }
}
