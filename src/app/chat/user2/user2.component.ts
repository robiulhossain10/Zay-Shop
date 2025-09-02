import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss']
})
export class User2Component {
  constructor(public service: SharedServiceService) {}

  msRs = '';

  msgRr: any = [];

  ngOnInit(): void {
    this.service.massageSource2.subscribe((val) => {
      this.msRs = val;
      this.msgRr.push(val);
    });
  }

  message: string = '';

  sendmsG() {
    this.service.updateMessage1(this.message);
  }
}
