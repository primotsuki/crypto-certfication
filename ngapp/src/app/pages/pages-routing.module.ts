import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {PagesComponent} from './pages.component';
import {SolicitudesComponent} from './register_solicitudes/solicitudes.component';
import {MisSolicitudesComponent} from './mis-solicitudes/mis-solicitudes.component';
import {SolicitudesPendientesComponent} from './solicitudes-pendientes/solicitudes-pendientes.component';
import {CertificadoEmisionComponent} from './certificado-emision/certificado-emision.component';
import { MisCertificadosComponent } from './mis-certificados/mis-certificados.component';
import { CertificadovalidacionComponent } from './certificadovalidacion/certificadovalidacion.component';
import { CertificadosInstitucionComponent } from './certificados-institucion/certificados-institucion.component';

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
        },{
            path: 'mis_certificados',
            component: MisCertificadosComponent
        },{
            path: 'validar',
            component: CertificadovalidacionComponent
        },{
            path: 'certificados_institucion',
            component: CertificadosInstitucionComponent
        }
    ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule{
    
}