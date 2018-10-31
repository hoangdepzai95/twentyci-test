import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from '../mocks/in-memory-data.service';
import { PostsModule } from './modules/posts/posts.module';
import { LayoutModule } from './modules/layout/layout.module';
import { AuthInterceptor } from './http/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupModule } from './shared/modules/popup/popup.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule,
        PostsModule,
        LayoutModule,
        BrowserAnimationsModule,
        PopupModule,
        RouterModule.forRoot([
            {
                path: '**',
                redirectTo: '/'
            }
        ], { scrollPositionRestoration: 'enabled' }),
        HttpClientInMemoryWebApiModule.forRoot(InMemDataService, { delay: 250, passThruUnknownUrl: true })
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
