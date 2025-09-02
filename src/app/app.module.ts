import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopSingleComponent } from './components/shop-single/shop-single.component';
import { ErrorComponent } from './components/error/error.component';
import { ReviewComponent } from './components/review/review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChildComponent } from './dataSharing/child/child.component';
import { ParentComponent } from './dataSharing/parent/parent.component';
import { ReceiverComponent } from './dataSharing/receiver/receiver.component';
import { SenderComponent } from './dataSharing/sender/sender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    ShopSingleComponent,
    ErrorComponent,
    ReviewComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    ChildComponent,
    ParentComponent,
    ReceiverComponent,
    SenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
