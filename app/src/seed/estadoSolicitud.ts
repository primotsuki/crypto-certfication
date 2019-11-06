import {getConnection} from 'typeorm';
import {EstadoSolicitud} from '../entity/estadoSolicitud';

export async function RegisterEstadoSolicitud() {
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(EstadoSolicitud)
        .values([
            {descripcion_solicitud: 'PENDIENTE'},
            {descripcion_solicitud: 'ACEPTADA'},
            {descripcion_solicitud: 'RECHAZADA'},
            {descripcion_solicitud: 'EN PROCESO'}
        ])
}