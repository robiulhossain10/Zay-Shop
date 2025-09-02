import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.scss'],
})
export class ReceiveComponent {
  message = '';
  constructor(private shared: SharedServiceService) {}

  ngOnInit() {
    this.shared['massageSource'].subscribe((msg) => (this.message = msg));
    // this.shared.currentMessage.subscribe(msg => this.message = msg);
    // this.shared.messageSource.subscribe(msg => this.message = msg);

    // this.shared.massageSource.subscribe(msg => this.message = msg);
    this.message = localStorage.getItem('sharedMessage') || 'No Data Found';
  }
}
