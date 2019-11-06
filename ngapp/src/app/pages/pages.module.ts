import { NgModule } from '@angular/core';
import { SolicitudesComponent } from './register_solicitudes/solicitudes.component';
import {CommonModule} from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NbMenuModule,
  NbLayoutModule,
  NbSidebarModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule,
  NbSelectModule,
  NbToastrModule,
  } from '@nebular/theme';
import { config } from 'rxjs';
import { MisSolicitudesComponent } from './mis-solicitudes/mis-solicitudes.component';
import { SolicitudesPendientesComponent } from './solicitudes-pendientes/solicitudes-pendientes.component';
import { CertificadoEmisionComponent } from './certificado-emision/certificado-emision.component';
import { VerCertificadoComponent } from './ver-certificado/ver-certificado.component';
import { CertificadovalidacionComponent } from './certificadovalidacion/certificadovalidacion.component';


@NgModule({
  declarations: [SolicitudesComponent, PagesComponent, MisSolicitudesComponent, SolicitudesPendientesComponent, CertificadoEmisionComponent, VerCertificadoComponent, CertificadovalidacionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbCardModule,
    NbSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot()
  ]
})
export class PagesModule { }
