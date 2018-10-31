import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './posts.service';
import { PostComponent } from './pages/post/post.component';

@NgModule({
    declarations: [
        PostsComponent,
        PostFormComponent,
        PostComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                canActivate: [AuthGuard],
                component: PostsComponent
            },
            {
                path: 'post/:id',
                canActivate: [AuthGuard],
                component: PostComponent
            }
        ])
    ],
    providers: [
        PostsService
    ]
})

export class PostsModule {
}
