//To import from the product file
import { Product } from "./product.js"

//To export the Beverage class
export class Beverage extends Product {
    constructor(name, price) {
        
        super(name, price)
    }
}