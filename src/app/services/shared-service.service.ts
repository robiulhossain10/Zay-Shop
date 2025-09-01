import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private massageSource = new BehaviorSubject<string>('Default Message');

  currentMassage = this.massageSource.asObservable;

  updateMessage(massage: string) {
    this.massageSource.next(massage);
  }
    
  
}
