import { Component, OnInit } from '@angular/core';
import {PagesService} from '../pages.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-mis-certificados',
  templateUrl: './mis-certificados.component.html',
  styleUrls: ['./mis-certificados.component.scss']
})
export class MisCertificadosComponent implements OnInit {

  certificados: any[];
  constructor(
    private pagesService: PagesService ,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getSolicitudesUsuario();
  }

  getSolicitudesUsuario() {
    this.pagesService.getCertificados(this.authService.currentUserValue.usuario_id).subscribe(data => {
      this.certificados = data.data;
      this.certificados.forEach(elem => {
          elem.json_data = JSON.parse(elem.json_data)
      });
    });
  }

}
