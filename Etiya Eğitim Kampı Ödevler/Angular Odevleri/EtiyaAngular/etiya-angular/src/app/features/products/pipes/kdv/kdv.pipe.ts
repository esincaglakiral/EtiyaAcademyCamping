import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: number, kdvValue: number): number {
     // value: pipe'ı uyguladığımız veri

    // return yeni değiştirdiğimiz veri
    return value + value * kdvValue;
  }

}
