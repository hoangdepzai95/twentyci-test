import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../mocks/in-memory-data.service';
import { PostsModule } from './modules/posts/posts.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule,
        PostsModule,
        RouterModule.forRoot([
            {
                path: '**',
                redirectTo: '/'
            }
        ], { scrollPositionRestoration: 'enabled' }),
        HttpClientInMemoryWebApiModule.forRoot(InMemDataService, { delay: 250, passThruUnknownUrl: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
