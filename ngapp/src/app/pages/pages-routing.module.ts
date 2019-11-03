import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {PagesComponent} from './pages.component';
import {SolicitudesComponent} from './register_solicitudes/solicitudes.component';
import {MisSolicitudesComponent} from './mis-solicitudes/mis-solicitudes.component';

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
        }
    ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule{
    
}