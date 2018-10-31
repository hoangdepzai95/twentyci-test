import { Pipe } from '@angular/core';

@Pipe({
    name: 'cutLongText',
    pure: true
})

export class CutLongTextPipe {

    transform(value: string, maxLength: number) {
        if (value.length > maxLength) {
            return `${value.slice(0, maxLength + 1)}...`;
        }

        return value;
    }
}
