import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoPKR'
})
export class USDtoPKRPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let [x] = args;
    return value * x;
  }

}
