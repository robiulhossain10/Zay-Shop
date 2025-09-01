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
import { SenderComponent } from './dataSharing/sender/sender.component';
import { ReceiverComponent } from './dataSharing/receiver/receiver.component';

const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
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
  { path: 'sender', component: SenderComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
