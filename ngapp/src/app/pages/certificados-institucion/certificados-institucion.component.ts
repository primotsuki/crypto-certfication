import { Component, OnInit } from '@angular/core';
import {PagesService} from '../pages.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-certificados-institucion',
  templateUrl: './certificados-institucion.component.html',
  styleUrls: ['./certificados-institucion.component.scss']
})
export class CertificadosInstitucionComponent implements OnInit {

  certificados: any[];
  constructor(
    private pagesService: PagesService ,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getSolicitudesUsuario();
  }

  getSolicitudesUsuario() {
    this.pagesService.gtCertificadosInstitucion(this.authService.currentInstitucion).subscribe(data => {
      this.certificados = data.data;
      this.certificados.forEach(elem => {
          elem.json_data = JSON.parse(elem.json_data)
      });
    });
  }

}
