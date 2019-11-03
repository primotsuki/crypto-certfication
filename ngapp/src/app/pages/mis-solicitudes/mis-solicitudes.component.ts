import { Component, OnInit } from '@angular/core';
import {PagesService} from '../pages.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-mis-solicitudes',
  templateUrl: './mis-solicitudes.component.html',
  styleUrls: ['./mis-solicitudes.component.scss']
})
export class MisSolicitudesComponent implements OnInit {

  solicitudes: any[];
  constructor(
    private pagesService: PagesService ,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getSolicitudesUsuario();
  }

  getSolicitudesUsuario() {
    this.pagesService.getSolicitudesUsuario(this.authService.currentUserValue.usuario_id).subscribe(data => {
      this.solicitudes = data.data;
      console.log(this.solicitudes);
    });
  }

}
