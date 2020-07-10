import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastrService: NbToastrService
  ) {
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f(){ return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const user = {
      email: this.f.email.value,
      password: this.f.password.value
    };
    this.authService.login(user).subscribe(data => {
      this.toastrService.show(
        'Login',
        'login Successfully',
        {position: NbGlobalPhysicalPosition.TOP_RIGHT, status: 'success' }
      );
      this.router.navigate(['/pages']);
    }, err=>{
      this.error = true;
      console.log( 'usuario o contraseña incorrectas ..' )
    });
  }
}
