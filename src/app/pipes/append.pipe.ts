import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'append' })
export class AppendPipe implements PipeTransform {
  transform(value: any, count : number) {
    return 'City Name: ' + value;
  }
}
