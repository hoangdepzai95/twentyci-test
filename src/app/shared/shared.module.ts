import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputDirective } from './directives/app-input.directive';
import { FormItemComponent } from './components/form-item/form-item.component';
import { AppButtonDirective } from './directives/app-button.directive';

@NgModule({
    declarations: [
        AppInputDirective,
        AppButtonDirective,
        FormItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        AppInputDirective,
        FormItemComponent,
        AppButtonDirective
    ]
})

export class SharedModule {
}
