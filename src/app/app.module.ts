import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule,
        RouterModule.forRoot([
            {
                path: '**',
                redirectTo: '/'
            }
        ], { scrollPositionRestoration: 'enabled' })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
