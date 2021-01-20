// import {Category} from '..//categories//category.model';

export class Category
{
    public _id? : string
    public CName : string;
    //public pdetails : string;
    public categoryImagePath : string;
    //public price : number;
    // public stock : number;
    // public category :[Category]

    constructor(CName:string,p_desc:string,p_imagePath:string,p_price:number)
    {

        this.CName = CName;
        //this.pdetails = p_desc;
        this.categoryImagePath = p_imagePath;
        //this.price = p_price;
       

    }
}