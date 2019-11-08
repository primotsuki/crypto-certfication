import { Component, OnInit } from '@angular/core';
import {PagesService} from '../pages.service';
import {AuthService} from '../../auth/auth.service';
@Component({
  selector: 'app-solicitudes-pendientes',
  templateUrl: './solicitudes-pendientes.component.html',
  styleUrls: ['./solicitudes-pendientes.component.scss']
})
export class SolicitudesPendientesComponent implements OnInit {

  solicitudes: any[];

  constructor(
    private pageService: PagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getSolicitudes();
  }

  getSolicitudes() {
    this.pageService.getSolicitudesInstitucion(this.authService.currentInstitucion).subscribe(data=>{
      this.solicitudes = data.data;
      console.log(this.solicitudes);
    });
  }
}
