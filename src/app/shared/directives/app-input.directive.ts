import { Directive } from '@angular/core';

@Directive({
    selector: '[app-input]',
    host: {
        '[class.app-input]': 'true'
    }
})

export class AppInputDirective {

}
