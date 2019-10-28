import { NgModule } from '@angular/core';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
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
  NbSelectModule
  } from '@nebular/theme';


@NgModule({
  declarations: [SolicitudesComponent, PagesComponent],
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
    ReactiveFormsModule
  ]
})
export class PagesModule { }
