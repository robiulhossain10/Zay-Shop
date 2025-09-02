import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceService {
  public massageSource = new BehaviorSubject<string>('Default Message');
  public massageSource1 = new BehaviorSubject<string>('Default Message');
  public massageSource2 = new BehaviorSubject<string>('Default Message');

  updateMessage(massage: string) {
    this.massageSource.next(massage);
  }

  updateMessage1(massage: string) {
    this.massageSource1.next(massage);
  }
  updateMessage2(massage: string) {
    this.massageSource2.next(massage);
  }
}
