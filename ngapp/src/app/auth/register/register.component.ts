import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  error: any;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  OnSubmit() {
    this.submitted = true;
    console.log(this.f.email.value);
    if (this.registerForm.invalid)
      return;
    else{
      let user = {
        nombre: this.f.nombre.value,
        apellido_paterno: this.f.apellido_paterno.value,
        apellido_materno: this.f.apellido_materno.value,
        username: this.f.username.value,
        email: this.f.email.value,
        password: this.f.password.value
      }
      this.authService.registerUser(user)
      .then(data=>{
        console.log(data);
      })
    }
  }

}
