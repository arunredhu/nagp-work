import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthValidator'
})
export class LengthValidatorPipe implements PipeTransform {
  transform(value: any[], condition: string): any {
    if (!condition || !value) {
      return value;
    }
    return value.filter(item => item.name.toLowerCase() === condition);
  }
}
