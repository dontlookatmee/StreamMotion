import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString',
})
export class SliceStringPipe implements PipeTransform {
  transform(value: string, endIndex: number): unknown {
    if (endIndex >= value.length) {
      return value;
    }
    return `${value.substr(0, endIndex)}...`;
  }
}
