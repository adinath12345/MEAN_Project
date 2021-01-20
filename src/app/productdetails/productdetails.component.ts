import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Cart } from "../models/cart.model";
import { CartServices } from "../services/cart.service";
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  id: number;
  products :any;
  @ViewChild('ingre_qty') ingre_qty : ElementRef; 
  
  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient,private cartServi:CartServices) { }

  ngOnInit(): void {


    let id2 = this.route.snapshot.paramMap.get('id');   //get product id from url

      

      this.http.get("http://localhost:3009/api/cproduct/"+id2).subscribe(posts =>{
        console.log("array"+posts);
  
       this.products =  posts;
  })   
}



addTocart()
    {
      console.log(this.products._id);
      cart :Cart;
      const qty = this.ingre_qty.nativeElement.value;

      let id = this.products._id;
      let product_name = this.products.cpname;
      let product_count = qty;
      let product_image = this.products.productImagePath;
      let product_price = this.products.price;
      let product_total = qty * product_price;

      console.log(this.products.cpname);
      console.log(qty);
      const cartItems = new Cart(this.products._id,product_name,product_count,product_image,product_price,product_total);

      console.log(cartItems);
      this.cartServi.addCart(cartItems);
      this.router.navigateByUrl('/mycart');
    }
}
