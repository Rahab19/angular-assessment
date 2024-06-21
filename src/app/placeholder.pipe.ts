import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder',
  standalone: true
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, minLength: number = 0, placeholder: string = 'Input is too short'): string {
    if (!value || value.length < minLength) {
      return placeholder;
    }
    return value;
  }

}
