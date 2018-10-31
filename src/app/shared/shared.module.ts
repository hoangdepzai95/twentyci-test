import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInputDirective } from './directives/app-input.directive';
import { FormItemComponent } from './components/form-item/form-item.component';
import { AppButtonDirective } from './directives/app-button.directive';
import { CutLongTextPipe } from './pipes/cut-long-text.pipe';

@NgModule({
    declarations: [
        AppInputDirective,
        AppButtonDirective,
        FormItemComponent,
        CutLongTextPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        AppInputDirective,
        FormItemComponent,
        AppButtonDirective,
        CutLongTextPipe
    ]
})

export class SharedModule {
}
