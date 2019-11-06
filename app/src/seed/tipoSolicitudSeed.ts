import {getConnection} from 'typeorm';
import{tipoSolicitud} from '../entity/tipo_solicitud';

export async function RegisterTipoSolicitud(){
    await getConnection()
        .createQueryBuilder()
        .insert()
        .into(tipoSolicitud)
        .values([
            {descripcion_solicitud: 'Revocacion de certificado'},
            { descripcion_solicitud: 'Emision de certificado'}
        ])
}