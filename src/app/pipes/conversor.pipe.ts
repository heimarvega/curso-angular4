import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform {
    transform(value, por) {
        // tslint:disable-next-line:radix
        const value_one = parseInt(value);
        // tslint:disable-next-line:radix
        const value_two = parseInt(por);
        const result = 'La multiplicación: ' + value_one + ' X ' + value_two + ' = ' + (value_one * value_two);
        return result;
    }
}