import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipe',
  standalone: true
})
export class CustpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value =='' || value == null || value ==undefined){
      return 'Novalue'
    }
    else{

       return value;
    }

  }

}
