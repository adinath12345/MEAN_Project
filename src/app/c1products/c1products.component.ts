import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Product } from "../models/product.model";
import { Router, ActivatedRoute } from '@angular/router';
//import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-c1products',
  templateUrl: './c1products.component.html',
  styleUrls: ['./c1products.component.css']
})
export class C1productsComponent implements OnInit {


  //myproducts =["ABC","XYZ","LMN","UVW","add","ryh"]

  products : Product[];
 
  constructor(private http:HttpClient,private route:ActivatedRoute) { };

  ngOnInit(): void {

    let id2 = this.route.snapshot.paramMap.get('id');   //get product id from url


    this.http.get<{[key:string]:Product}>("http://localhost:3009/api/pc/"+id2).pipe(map(responseData =>{
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
      this.products=postArray;
    });



    
  }

}
