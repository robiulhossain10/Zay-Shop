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
import { User1Component } from './chat/user1/user1.component';
import { User2Component } from './chat/user2/user2.component';
import { SendComponent } from './chat/send/send.component';
import { ReceiveComponent } from './chat/receive/receive.component';
import { ExampleComponent } from './directives/example/example.component';
import { ProductComponent } from './directives/product/product.component';
import { CustomdirectiveDirective } from './directives/customdirective.directive';

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
    User1Component,
    User2Component,
    SendComponent,
    ReceiveComponent,
    ExampleComponent,
    ProductComponent,
    CustomdirectiveDirective
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
