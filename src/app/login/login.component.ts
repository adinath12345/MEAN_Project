import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {  HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { Userlogin } from "../models/userlogin.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new BehaviorSubject<Userlogin>(null);
  constructor(private route: ActivatedRoute,private router: Router,private http:HttpClient) { }

  ngOnInit(){
  }
  loginClicked(form:NgForm)
  {
    

    const email = form.value.email;
    const password = form.value.password;

    const login = { email :email,password:password};

   

    this.http.post('http://localhost:3009/api/signin',login).subscribe(responseData => {
      console.log(responseData);
      

        this.router.navigate(['/main']);

    
    })
    form.reset();
  }

  private handleAuthentication(
    email: string,
    userId: string,
    name: string,
  ) 
  {
   
    const user = new Userlogin(email, userId, name);
    this.user.next(user);

    localStorage.setItem('userData', JSON.stringify(user)); // option 1
    localStorage.setItem('user_email', email);  // option 2
    localStorage.setItem('user_name', name);  // option 3
    localStorage.setItem('user_id', userId);  // otpion 4
 
    sessionStorage.setItem('user_name', name);
  }


}




























// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

// import { AlertService,  } from '../services/alert.service';
// import { AuthenticationService } from "../services/authentication.service";

// @Component({ templateUrl: 'login.component.html' })
// export class LoginComponent implements OnInit {
//     loginForm: FormGroup;
//     loading = false;
//     submitted = false;
//     returnUrl: string;

//     constructor(
//         private formBuilder: FormBuilder,
//         private route: ActivatedRoute,
//         private router: Router,
//         private authenticationService: AuthenticationService,
//         private alertService: AlertService
//     ) {
//         // redirect to home if already logged in
//         if (this.authenticationService.currentUserValue) {
//             this.router.navigate(['/']);
//         }
//     }

//     ngOnInit() {
//         this.loginForm = this.formBuilder.group({
//             username: ['', Validators.required],
//             password: ['', Validators.required]
//         });

//         // get return url from route parameters or default to '/'
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.loginForm.controls; }

//     onSubmit() {
//         this.submitted = true;

//         // reset alerts on submit
//         this.alertService.clear();

//         // stop here if form is invalid
//         if (this.loginForm.invalid) {
//             return;
//         }

//         this.loading = true;
//         this.authenticationService.login(this.f.username.value, this.f.password.value)
//             .pipe(first())
//             .subscribe(
//                 data => {
//                     this.router.navigate([this.returnUrl]);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }