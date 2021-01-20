export class Product
{
    public _id? : string
    public cpname : string;
    public pdetails : string;
    public productImagePath : string;
    public price : number;
    public rating :string;
    public quantity :string;
    // public stock : number;
    // public category :[Category]

    constructor(cpname:string,p_desc:string,p_imagePath:string,p_price:number,p_rating:string,p_quantity:string)
    {

        this.cpname = cpname;
        this.pdetails = p_desc;
        this.productImagePath = p_imagePath;
        this.price = p_price;
        this.rating= p_rating;
        this.quantity= p_quantity

    }
}