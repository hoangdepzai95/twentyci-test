import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    declarations: [
        PostsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                canActivate: [AuthGuard],
                component: PostsComponent
            }
        ])
    ]
})

export class PostsModule {
}
