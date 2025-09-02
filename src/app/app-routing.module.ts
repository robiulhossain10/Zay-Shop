import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorComponent } from './components/error/error.component';
import { ReviewComponent } from './components/review/review.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './dataSharing/parent/parent.component';
import { ChildComponent } from './dataSharing/child/child.component';
import { User1Component } from './chat/user1/user1.component';
import { User2Component } from './chat/user2/user2.component';
import { SendComponent } from './chat/send/send.component';
import { ReceiveComponent } from './chat/receive/receive.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/add', component: UserListComponent },
  { path: 'users/edit/:id', component: UserListComponent },
  {
    path: 'shop',
    component: ShopComponent,
    children: [{ path: 'review', component: ReviewComponent }],
  },
  { path: 'single', component: ShopSingleComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'send', component: SendComponent },
  { path: 'receive', component: ReceiveComponent },
  { path: 'user1', component: User1Component },
  { path: 'user2', component: User2Component },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
