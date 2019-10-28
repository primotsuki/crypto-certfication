import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {tipoSolicitud} from '../../entity/tipo_solicitud';

export async function getTipoSolicitud(req: Request, res: Response) {
    try {
        const tipo_solicitud = await getManager()
        .createQueryBuilder(tipoSolicitud, "tipoSolicitud")
        .getMany();
        res.send({
            response: true,
            data: tipo_solicitud
        });
    } catch (e) {
        res.status(500).send({
            error: 'internal server error'
        })
        return;
    }
}