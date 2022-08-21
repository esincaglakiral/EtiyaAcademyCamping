import { Product } from "../../products/models/product";


export interface CartShowModel{
    product:Product;
    quantity:number;
}