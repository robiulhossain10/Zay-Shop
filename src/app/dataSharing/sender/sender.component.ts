import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  newMassage = '';

  constructor(private shared: SharedServiceService) {
    
  }

  sendMassage() {
    this.shared.updateMessage(this.newMassage);
  }

  user = {
    name: 'Robiul',
    age: 26,
    address: 'Matuail Dhaka'
  }

  saveData() {
    localStorage.setItem('mydata',JSON.stringify(this.user));
  }
  getData() {
   localStorage.getItem('mydata' || null);
  }

  newData = {};
}
