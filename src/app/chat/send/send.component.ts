import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent {
  newMassage = '';

  constructor(private shared: SharedServiceService) {}

  sendMassage() {
    this.shared.updateMessage(this.newMassage);
  }
  saveMessage() {
    localStorage.setItem('sharedMessage', this.newMassage);
  }

  removeMessage() {
    localStorage.removeItem('sharedMessage');
  }
}
