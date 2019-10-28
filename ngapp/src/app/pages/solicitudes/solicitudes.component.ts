import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {PagesService} from '../pages.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

  SolicitudForm: FormGroup;
  submitted = false;
  error: any;
  instituciones: any[];
  tipoSolicitudes: any[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pagesService: PagesService
  ) { }

  ngOnInit() {
    this.SolicitudForm = this.formBuilder.group({
      motivo: ['', Validators.required],
      tipo_solicitud_id: ['', Validators.required],
      institucion_id: ['', Validators.required],
      certificado_id: [null]
    });
    this.getinstituciones();
    this.getTipoSolicitudes();
  }
  get f() { return this.SolicitudForm.controls; }
  getinstituciones() {
    this.pagesService.getInstituciones().subscribe(data => {
      this.instituciones = data.data;
    });
  }
  getTipoSolicitudes() {
    this.pagesService.getTipoSolicitud().subscribe(data => {
      this.tipoSolicitudes = data.data;
    });
  }
  OnSubmit() {
    this.submitted = true;
    if (this.SolicitudForm.invalid) {
      return;
    } else {
      const solicitud = {
        tipoSolicitudId: this.f.tipo_solicitud_id.value,
        institucionId: this.f.institucion_id.value,
        certificadoId: this.f.certificado_id.value,
        motivo: this.f.motivo.value
      };
      this.pagesService.createSolicitud(solicitud).subscribe(data => {
        console.log(data.data);
      });
    }
  }
}
