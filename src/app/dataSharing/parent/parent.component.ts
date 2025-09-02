import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  parentmassage = 'Hello from Parent';
  
  massage = '';

  receiveMassage($event: string) {
    this.massage = $event;
  }
}
