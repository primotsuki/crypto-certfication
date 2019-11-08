import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Solicitud} from '../../entity/solicitud';

export async function getSolicitudInstitucion(req: Request, res: Response, next){
    try {
        const solicitudes = await getManager()
            .createQueryBuilder(Solicitud, 'solicitud')
            .leftJoinAndSelect("solicitud.tipoSolicitud","tipo_solicitud")
            .leftJoinAndSelect("solicitud.usuario", 'usuario')
            .where("solicitud.estadoSolicitudId = :estado_id AND solicitud.institucionId = :institucion_id", {estado_id:req.params.estado_id, institucion_id: req.params.institucion_id})
            .getMany();
        res.send({
            response: true,
            data: solicitudes
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            error: 'the query is no well implemented'
        })
    }
}