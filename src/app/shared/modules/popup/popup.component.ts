import { Component, TemplateRef, HostListener, ViewChild } from '@angular/core';
import { PopupService } from './popup.service';
import { fadeInAnimation } from '../../animations/fade-in.animation';
import { fadeOutAnimation } from '../../animations/fade-out.animation';

@Component({
    selector: 'popup-container',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    animations: [fadeInAnimation, fadeOutAnimation]
})

export class PopupComponent {

    template: TemplateRef<any>;

    constructor(private service: PopupService) {
        this.service.init(this);
    }

    open(template: TemplateRef<any>) {
        this.template = template;
    }

    close = () => {
        this.template = null;
    }

    @HostListener('document:keydown', ['$event'])
    onKeyDown($event) {
        if (this.template && $event.keyCode === 27) {
            this.close();
        }
    }
}
