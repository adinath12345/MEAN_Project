
import { Component, EventEmitter} from '@angular/core';
import { Order } from '../models/order.model';



export class OrderServices
{
    OrderChanged = new EventEmitter<Order[]>();
    order : Order[];


    getOrder()
    {
        return this.order.slice();
    }

 
    addToOrder(orderitems:Order)
      {
          this.order.push(orderitems);
          this.OrderChanged.emit(this.order.slice());
      }

  
      


}