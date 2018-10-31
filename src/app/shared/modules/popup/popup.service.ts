import { Injectable, TemplateRef } from '@angular/core';
import { PopupComponent } from './popup.component';

@Injectable()

export class PopupService {

    private component: PopupComponent;

    init(component: PopupComponent) {
        this.component = component;
    }

    open(template: TemplateRef<any>) {
        this.component.open(template);
    }

    close() {
        this.component.close();
    }
}
