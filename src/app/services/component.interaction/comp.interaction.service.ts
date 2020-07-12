import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Injectable()
export class CompInteractionService {
  private subscription: Observable<HTMLElement>;

  constructor() {
  }

  public subscribeOnEvent(domEl: HTMLElement, eventName: string): void {
    this.subscription = new Observable((observer: Subscriber<HTMLElement>) => {
      const handler: any = (el: HTMLElement) => observer.next(el);
      domEl.addEventListener(eventName, handler);
      return () => {
        domEl.removeEventListener(eventName, handler);
      };
    });
  }

  public getInputValue(that: any, variable: string): void {
    this.subscription.subscribe({
      next: (el: HTMLElement) => {
        // @ts-ignore
        that[variable] = el.target.value;
      },
      error: () => {
      },
      complete: () => {
        console.log('Complete method...');
      }
    });
  }
}
