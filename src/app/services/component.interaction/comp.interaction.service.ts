import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Injectable()
export class CompInteractionService {
  private subscription: Observable<string>;

  constructor() {
  }

  public subscribeOnEvent(domEl: HTMLElement, eventName: string): void {
    this.subscription =  new Observable((observer) => {
      const handler: any = (e: string) => observer.next(e);
      domEl.addEventListener(eventName, handler);
      return () => {
        domEl.removeEventListener(eventName, handler);
      };
    });
  }

  public getInputValue(value: string): void {
    this.subscription.subscribe((data: string) => {
      value = data;
    });
  }
}
