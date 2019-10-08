import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserService} from '../_services/user.service';
import { ConsoleReporter } from 'jasmine';

@Component({ templateUrl: 'register.component.html',
            styleUrls:['register.component.scss'] })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService 
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            apellido_paterno: ['', Validators.required],
            apellido_materno: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password:['', Validators.required],
            repeatPassword: ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        let param = {
            nombre: this.f.nombre.value,
            apellido_paterno: this.f.apellido_paterno,
            apellido_materno: this.f.apellido_materno,
            username: this.f.username,
            email: this.f.email,
            password: this.f.password
        };
        this.userService.register(param)
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        });
    }
}
