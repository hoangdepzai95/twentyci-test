import { Component } from '@angular/core';

@Component({
    selector: 'app-form-item',
    template: '<ng-content></ng-content>',
    styleUrls: ['form-item.component.scss'],
    host: {
        '[class.app-form-item]': 'true'
    }
})

export class FormItemComponent {
}
