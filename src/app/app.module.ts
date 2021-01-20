import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.model';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { C1productsComponent } from './c1products/c1products.component';
import { C4productsComponent } from './c4products/c4products.component';
import { MycartComponent } from './mycart/mycart.component';
import { MyorderComponent } from './myorder/myorder.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CartServices } from "./services/cart.service";
import { ProductServices } from './services/product.service';
import { NewOrderServices } from './services/neworder.service';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ProductdetailsComponent,
    C1productsComponent,
    
    C4productsComponent,
    MycartComponent,
    MyorderComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CartServices,ProductServices,NewOrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
