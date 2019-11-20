import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {PagesComponent} from './pages.component';
import {SolicitudesComponent} from './register_solicitudes/solicitudes.component';
import {MisSolicitudesComponent} from './mis-solicitudes/mis-solicitudes.component';
import {SolicitudesPendientesComponent} from './solicitudes-pendientes/solicitudes-pendientes.component';
import {CertificadoEmisionComponent} from './certificado-emision/certificado-emision.component';

const routes: Routes =[{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'solicitudes',
            component: SolicitudesComponent
        }, {
            path: 'mis_solicitudes',
            component: MisSolicitudesComponent
        }, {
            path: 'pendientes',
            component: SolicitudesPendientesComponent
        },{
            path: ':solicitud_id/emitir_certificado/:user_id',
            component: CertificadoEmisionComponent
        }
    ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule{
    
}