import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {

    logInForm = this.fb.group({
        userName: [ '', [ Validators.required ] ],
        password: [ '', [ Validators.required ] ],
    });

    wrongInfo: boolean;

    constructor(private fb: FormBuilder, private authService: AuthService) {

    }

    submitForm(): void {
        this.wrongInfo = false;

        for (const i in this.logInForm.controls) {
            this.logInForm.controls[i].markAsDirty();
            this.logInForm.controls[i].updateValueAndValidity();
        }

        if (this.logInForm.valid) {
            this.authService.login(
                this.logInForm.value.userName,
                this.logInForm.value.password,
                () => {
                    this.wrongInfo = true;
                }
            );
        }
    }
}

