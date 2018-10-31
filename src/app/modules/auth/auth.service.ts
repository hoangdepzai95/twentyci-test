import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    pathname: string;
    queryParams: any = {};

    private loggedIn = new BehaviorSubject(false);

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        this.loggedIn.next(this.getLoggedInValue());
    }


    private createSession(response: any): void {

        localStorage.setItem('access_token', response.access_token);
        this.loggedIn.next(true);
    }

    login(userName: string, password: string, onWrongInfo: Function) {
         this.http.post('/api/login', { userName, password })
             .pipe(
                 catchError((err) => {
                     if (err.status === 401) {
                         onWrongInfo();
                     }
                     return throwError(err);
                 })
             )
            .subscribe((res) => {
                this.createSession(res);
                this.router.navigate(['/']);
         });
    }

    getLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    getLoggedInValue(): boolean {
        return !!this.getAccessToken();
    }

    logout(): void {
        localStorage.removeItem('access_token');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }

    getAccessToken(): string {
        return localStorage.getItem('access_token') || '';
    }
}
