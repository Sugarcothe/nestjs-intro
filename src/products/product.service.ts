import { Product } from './product.model';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ProductServices {
  products: Product[]  =  [];

  insertProduct(title: string, desc: string, price: number){
    const prodId = new Date().toString()
    const newProduct = new Product(
      new Date().toString(), 
      title, 
      desc, 
      price)
    this.products.push(newProduct)
    return prodId;
  }
}