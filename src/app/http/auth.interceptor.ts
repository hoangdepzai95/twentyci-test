import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../modules/auth/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    authService: AuthService;

    constructor(private injector: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.authService = this.injector.get(AuthService);
        const accessToken = this.authService.getAccessToken();
        const isPublicEndPoint = req.url.includes('/login');

        if (!isPublicEndPoint && accessToken) {
            return next.handle(this.getCloneRequest(req)).pipe(
                catchError((err) => {
                    if (err.status == 401) {
                        this.authService.logout();
                    }

                    return throwError(err);
                })
            );
        } else {
            return next.handle(req);
        }
    }

    getCloneRequest(req: HttpRequest<any>): HttpRequest<any> {
        const accessToken = this.authService.getAccessToken();
        return req.clone({
            headers: req.headers.set('Authorization',
                'Bearer ' + accessToken)
        });
    }
}
