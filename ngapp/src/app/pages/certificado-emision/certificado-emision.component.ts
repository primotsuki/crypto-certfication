import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PagesService} from '../pages.service';
import {NbToastrService, NbGlobalPhysicalPosition} from '@nebular/theme';
@Component({
  selector: 'app-certificado-emision',
  templateUrl: './certificado-emision.component.html',
  styleUrls: ['./certificado-emision.component.scss']
})
export class CertificadoEmisionComponent implements OnInit {

  CertForm: FormGroup;
  submitted = false;
  error: any;
  solicitud_id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pagesService: PagesService,
    private toastService: NbToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(params);
      this.solicitud_id = params.id;
      this.CertForm = this.formBuilder.group({
        titulo_curso: ['', Validators.required],
        fecha_emision: ['', Validators.required],
        alumno_id: [params.user_id],
        alumno_nombre: ['', Validators.required],
        alumno_dni: ['', Validators.required],
        institucion_id: [''],
        institucion_nombre: ['', Validators.required],
        tipo_solicitud_id: [1],
        wallet: ['', Validators.required],
        solicitud_id: [params.solicitud_id]
      });
      this.get_datos_persona();
    });
  }
  get f() {return this.CertForm.controls;}
  get_datos_persona() {
    this.pagesService.getDatosUsuario(this.f.alumno_id.value).subscribe(data=>{
      console.log(data);
      this.f.institucion_nombre.setValue(data.data.instituciones[0].nombre);
      this.f.institucion_id.setValue(data.data.instituciones[0].id);
      this.f.alumno_nombre.setValue(`${data.data.nombre} ${data.data.apellido_paterno} ${data.data.apellido_materno}`)
    });
  }
  OnSubmit() {
    this.submitted = true;
    if (this.CertForm.invalid) {
      return;
    } else {
      const certificado = {
        titulo_curso: this.f.titulo_curso.value,
        fecha_emision: this.f.fecha_emision.value,
        alumno_id: this.f.alumno_id.value,
        alumno_nombre: this.f.alumno_nombre.value,
        alumno_dni: this.f.alumno_dni.value,
        institucion_id: this.f.institucion_id.value,
        institucion_nombre: this.f.institucion_nombre.value,
        tipo_solicitud_id: this.f.tipo_solicitud_id.value,
        wallet: this.f.wallet.value,
        solicitud_id: this.f.solicitud_id.value
      }
      this.pagesService.createCertificate(certificado).subscribe(data=>{
        console.log(data);
      })
    }
  }

}
