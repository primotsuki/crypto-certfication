import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {PagesComponent} from './pages.component';
import {SolicitudesComponent} from './solicitudes/solicitudes.component';

const routes: Routes =[{
    path: '',
    component: PagesComponent,
    children:[
        {
            path: 'solicitudes',
            component: SolicitudesComponent
        }
    ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule{
    
}