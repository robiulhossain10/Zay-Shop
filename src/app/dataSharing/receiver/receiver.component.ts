import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit{
  recievedMassage = '';

  constructor(private shared: SharedServiceService) {
    
  }

  ngOnInit() {
    this.shared.currentMassage
  }
}
