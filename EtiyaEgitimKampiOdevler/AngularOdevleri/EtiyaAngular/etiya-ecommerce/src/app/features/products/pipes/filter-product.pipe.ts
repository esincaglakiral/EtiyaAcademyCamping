import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct',
})
export class FilterProductPipe implements PipeTransform {
  transform(value: Product[], categoryId: number): Product[] {
    if (categoryId && categoryId > 0)
      return value.filter((v) => v.categoryId == categoryId);
    return value;
  }
}
