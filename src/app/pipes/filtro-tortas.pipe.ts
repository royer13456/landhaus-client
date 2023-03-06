import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTortas'
})
export class FiltroTortasPipe implements PipeTransform {
singleItem: any;

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
