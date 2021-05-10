import { ProductServices } from './product.service';
import { Controller, Post, Body } from '@nestjs/common';
import { generate } from 'rxjs';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductServices: ProductServices) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string, 
    @Body('description') prodDesc: string, 
    @Body('price') prodPrice: number, 
    ) {
    const generatedId = this.ProductServices.insertProduct(prodTitle, prodDesc, prodPrice);
    return {id: generatedId}
  }
}
