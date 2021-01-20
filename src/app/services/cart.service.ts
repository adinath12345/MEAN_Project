        import {  Cart} from "../models/cart.model";
        //import { Cart1 } from "../models/cart1.model";
        import { Component, EventEmitter} from '@angular/core';
                
        
        export class CartServices
        {
            CartChanged = new EventEmitter<Cart[]>();
           
            
            cart : Cart[] =[  ];
            
            getcart()
            {
                return this.cart.slice();
                           //send the duplicate array
            }                                 
            addCart(cartItems:Cart)
              {
                  this.cart.push(cartItems);
                  
                  this.CartChanged.emit(this.cart.slice());
                  

                }  
            deleteCart(index:number)
              {
              
                    this.cart.splice(index, 1)             //index removed
                }
              
        
        
        }