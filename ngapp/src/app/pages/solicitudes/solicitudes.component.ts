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
      tipo_solicitud: ['', Validators.required],
      institucion_id: ['', Validators.required],
      nombre_institucion: ['', Validators.required]
    });
    this.getinstituciones();
  }
  getinstituciones() {
    this.pagesService.getInstituciones().subscribe(data => {
      this.instituciones = data.data;
    });
  }
}
