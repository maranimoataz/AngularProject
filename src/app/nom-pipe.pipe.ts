import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomPipe'
})
export class NomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
