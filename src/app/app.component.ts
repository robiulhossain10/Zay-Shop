import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'EShop';

  isLogin = true;

  constructor(private router: Router) { };

  ngOnInit(): void{
    // this.login();
  }
;

  login() {
    if (this.isLogin) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/login'])
    }
  }
}
