// import {Category} from '..//categories//category.model';

export class Fcategory
{
    public _id? : string
    public FCName : string;
    //public pdetails : string;
    public fcategoryImagePath : string;
    //public price : number;
    // public stock : number;
    // public category :[Category]

    constructor(FCName:string,p_desc:string,p_imagePath:string,p_price:number)
    {

        this.FCName = FCName;
        //this.pdetails = p_desc;
        this.fcategoryImagePath = p_imagePath;
        //this.price = p_price;
       

    }
}