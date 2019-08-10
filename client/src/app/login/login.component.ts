import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public registerForm: FormGroup;
    public signup = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: ['']
        });

        this.registerForm = this.formBuilder.group({
            username: [''],
            password: ['']
        });
    }

    public showRegister(): void {
        this.signup = true;
    }

    public login(): void {
        this.authService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    }


    public register(): void {
        this.authService.register(this.registerForm.controls.username.value, this.registerForm.controls.password.value);
    }
}
