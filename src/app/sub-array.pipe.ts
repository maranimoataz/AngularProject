import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subArray'
})
export class SubArrayPipe implements PipeTransform {

  transform(value:number[], ...args: number[]): unknown {
    return value;
    
  }

}
