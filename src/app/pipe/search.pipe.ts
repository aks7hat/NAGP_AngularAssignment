import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: Product[], searchInputText: string): any[] {

    searchInputText = searchInputText.toLocaleLowerCase();

    return product.filter(prod => {
      // tslint:disable-next-line: no-string-literal
      return prod['name'].toLocaleLowerCase().includes(searchInputText);
    });
  }

}
