import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: {name:String,lastname:String,email:String,address:String,password:String;})
  {
    console.log(postData);

    this.http.post("http://localhost:3009/api/signup",postData).subscribe(responsedata =>{
      console.log(responsedata);
      alert("Welcome!! Your account be created");
    });
  }

}
