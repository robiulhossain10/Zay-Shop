import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  isLogin = true;
  status = 1;

  user = ['Robiul', 'Fahim', 'Karim', 'Rakib']
  


  changeStatus() {
    this.status = this.status < 3 ? this.status + 1 : 1;
  }
}
