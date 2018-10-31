import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginComponent,
            },
        ])
    ]
})

export class AuthModule {
}
