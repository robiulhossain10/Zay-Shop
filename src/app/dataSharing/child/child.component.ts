import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() childMessage: string = 'Hi I am Child';

  @Output() messegaeEvent = new EventEmitter<string>();

  message = '';
  sendMessage() {
    this.messegaeEvent.emit(this.message);
  }
}
