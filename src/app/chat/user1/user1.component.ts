import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss'],
})
export class User1Component implements OnInit {
  constructor(public service: SharedServiceService) {}

  msRs = '';

  msgRr: any = [];

  ngOnInit(): void {
    this.service.massageSource1.subscribe((val) => {
      this.msRs = val;
      this.msgRr.push(val);
    });
  }

  message: string = '';

  sendmsG() {
    this.service.updateMessage2(this.message);
  }
}
  
  