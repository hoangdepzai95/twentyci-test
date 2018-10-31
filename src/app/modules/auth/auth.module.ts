import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
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
