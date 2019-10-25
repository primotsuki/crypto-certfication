import { NgModule } from '@angular/core';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {NbMenuModule,
  NbLayoutModule,
  NbSidebarModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbCardModule
  } from '@nebular/theme';


@NgModule({
  declarations: [SolicitudesComponent, PagesComponent],
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
    NbCardModule
  ]
})
export class PagesModule { }
