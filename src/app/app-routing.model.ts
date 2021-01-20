import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { MycartComponent } from './mycart/mycart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { C1productsComponent } from "./c1products/c1products.component";
import { C4productsComponent } from "./c4products/c4products.component";
import { AboutComponent } from './about/about.component';


const appRoutes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:HomepageComponent},
    
    {path:'category/:id',component:C1productsComponent},
    //{path:'category/:id',component:LoginComponent},
    {path:'fcategory/:id',component:C1productsComponent},
    {path: 'product/:id', component:ProductdetailsComponent},
    
    
    //{path: 'bsproduct/:id', component:LoginComponent},


    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'mycart',component:MycartComponent},
    {path:'c1products',component:C1productsComponent},
    {path: 'about',component:AboutComponent},
    {path:'c4products',component:C4productsComponent}



];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule {

}

