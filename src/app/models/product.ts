import Category from "./category";

export interface Product{  
    id:     string;
    name:  string;
    description:	string;
    price:	number;
    stock:	number;
    category:string;
    images:	string[];
    status:boolean;
}