import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Category } from "../models/category.model";
import { Subscription } from 'rxjs';
import { Fcategory } from "../models/fcategory.model";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  //mycategories=["Vitamins","Carbohydrates","BodyVitamins","Sports","Vitamins","Carbohydrates","BodyVitamins","Sports"]

  categories : Category[];
  fcategories: Fcategory[];
  
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get<{[key:string]:Category}>("http://localhost:3009/api/categories").pipe(map(responseData =>{
      const postArray=[];
      
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          postArray.push({...responseData[key],id:key})
        }
      }

      return postArray;

    })).subscribe(postArray =>{
      this.categories=postArray;
    });
    





    this.http.get<{[key:string]:Fcategory}>("http://localhost:3009/api/fcategories").pipe(map(responseData =>{
      const postArray1=[];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          postArray1.push({...responseData[key],id:key})
        }
      }

      return postArray1;

    })).subscribe(postArray1 =>{
      this.fcategories=postArray1;
    });



   




    


    
    



   
    
  }  
}

































