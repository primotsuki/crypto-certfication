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


@NgModule({
  declarations: [SolicitudesComponent, PagesComponent, MisSolicitudesComponent],
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
