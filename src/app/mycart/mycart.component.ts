import { Component, OnInit } from '@angular/core';
import { CartServices } from "../services/cart.service";
import { HttpClient } from '@angular/common/http';
import { Cart } from "../models/cart.model";
//import { Cart1 } from "../models/cart1.model";
import { Order } from "../models/order.model";
import { NewOrderServices } from "../services/neworder.service";


@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(private cartSer : CartServices,private http:HttpClient,private newOrd:NewOrderServices) { }
  cart : Cart[] ;
  
  order :Order[] ;
  final_total : number =0;
  ngOnInit(): void {
    this.cart=this.cartSer.getcart();
   
    for (let i of this.cart)
    {
      this.final_total=this.final_total+i.product_total;
    }
  }

  deleteCart(index:number)
  {
    this.cartSer.deleteCart(index);
    this.cart=this.cartSer.getcart();
    
    this.final_total=0

    for (let i of this.cart)
    {
      this.final_total=this.final_total+i.product_total;
    }
    this.cart=this.cartSer.getcart();
    
   
  }



  placeOrder2()
  {
    for(let i of this.cart)
    {
      const items = new Order(i.product_id,i.product_name,i.product_count,i.product_price);
      this.newOrd.addToOrder(items);
    }

    let products2:Order[];          //blank array
    products2=this.newOrd.getOrder();
    let amount=this.final_total;
    let address=" ";
    let user="5f06acb18dea7908bf282c77";



    let postData = 
    {
      products : products2,
      amount:amount,
      address:address,
      user:user
    }

    
    this.http.post("http://localhost:3009/api/order/create",postData).subscribe(responseData =>{
      console.log(responseData);

      alert("Order is Created!!!!!");
    })
   }
}


