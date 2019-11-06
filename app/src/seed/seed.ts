import {createConnection} from 'typeorm';
import {RegisterEstadoSolicitud} from './estadoSolicitud';
import {RegisterInstitucion} from './institucionSeed';
import { RegisterTipoSolicitud } from './tipoSolicitudSeed';
import {RegisterRol} from './RolSeed';

createConnection().then(connection => {
    RegisterRol();
    RegisterEstadoSolicitud();
    RegisterInstitucion();
    RegisterTipoSolicitud();
});