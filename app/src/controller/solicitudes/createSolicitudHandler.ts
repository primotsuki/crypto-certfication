import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Solicitud} from '../../entity/solicitud';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
const env = dotenv.config()
export async function CreateSolicitud(req: Request, res: Response) {

    let solicitud = req.body;
    let new_solicitud:any = {};
    var token = req.headers['authorization'];
    token = token.replace('Bearer ', '');

    var user_decoded = jwt.verify(token,  process.env.JWT_SECRET_KEY);
    solicitud.createdAt = new Date();
    try {
        new_solicitud = await getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Solicitud)
                    .values(solicitud)
                    .execute();
        let solicitud_id = new_solicitud.identifiers[0].id;
        updateRelation("tipoSolicitud", solicitud_id, solicitud.tipoSolicitudId);
        updateRelation("usuario", solicitud_id, user_decoded.id);
        updateRelation("institucion", solicitud_id, solicitud.institucionId);
        updateRelation("estadoSolicitud", solicitud_id, 1);
        
            res.send({
            status: true,
            id: solicitud_id
        });
    }
    catch (e) {
        console.log(e);
        res.status(500).send({
            error: e
        })
        return;
    }
}
async function updateRelation(relation: string, solicitud_id: number, id: number) {
    await getConnection()
            .createQueryBuilder()
            .relation(Solicitud, relation)
            .of(solicitud_id)
            .set(id);
}