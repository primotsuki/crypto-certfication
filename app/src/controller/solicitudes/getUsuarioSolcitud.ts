import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Solicitud} from '../../entity/solicitud';

export async function getUsuarioSolicitud(req: Request, res: Response, next){
    try {
        const solicitudes = await getManager()
        .createQueryBuilder(Solicitud,"solicitud")
        .leftJoinAndSelect("solicitud.tipoSolicitud","tipo_solicitud")
        .leftJoinAndSelect("solicitud.institucion", "institucion")
        .leftJoinAndSelect("solicitud.estadoSolicitud", "estado")
        .where("solicitud.usuarioId = :usuario_id",{usuario_id: req.params.id})
        .getMany();

        res.send({
            response: true,
            data: solicitudes
        });
        
    } catch (e) {
        console.log(e);
        res.status(500).send({
            error: 'internal server error'
        })
    }
}