import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Injectable()
export class CompInteractionService {
  private subscription: Observable<HTMLElement>;

  constructor() {
  }

  public subscribeOnEvent(domEl: HTMLElement, eventName: string): void {
    this.subscription =  new Observable((observer) => {
      const handler: any = (e: HTMLElement) => observer.next(e);
      domEl.addEventListener(eventName, handler);
      return () => {
        domEl.removeEventListener(eventName, handler);
      };
    });
  }

  public getInputValue( that: any, variable: string): void {
    this.subscription.subscribe((el: HTMLElement) => {
      // @ts-ignore
      that[variable] = el.target.value;
    });
  }
}
