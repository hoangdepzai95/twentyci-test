import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

type ButtonType = 'primary' | 'default' | 'danger';

@Directive({
    selector: '[app-button]',
    host: {
        '[class.app-btn]': 'true'
    }
})

export class AppButtonDirective {

    @Input()
    set type(value: ButtonType) {
        this.updateClass(value);
    }

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    updateClass(btnType: string) {
        this.renderer.addClass(this.elRef.nativeElement, `btn-${btnType}`);
    }
}
