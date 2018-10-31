import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[app-button]'
})

export class AppButtonDirective {

    @Input()
    type = 'default';

    @HostBinding('class')
    private get getClass(): string {
        return `app-button btn-${this.type}`;
    }
}
