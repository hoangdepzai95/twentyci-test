import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';
import { SharedModule } from '../../shared.module';
import { PopupService } from './popup.service';
import { AuthModule } from '../../../modules/auth/auth.module';

@NgModule({
    declarations: [
        PopupComponent
    ],
    imports: [
        SharedModule,
        AuthModule
    ],
    providers: [
        PopupService
    ],
    exports: [
        PopupComponent
    ]
})

export class PopupModule {
}
