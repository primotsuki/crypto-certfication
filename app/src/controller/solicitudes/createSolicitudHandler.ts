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
    solicitud.usuarioId= user_decoded.id;
    solicitud.createdAt = new Date();
    solicitud.estadoSolicitudId = 4;
    console.log(solicitud);

    try {
        new_solicitud = await getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Solicitud)
                    .values(solicitud)
                    .execute();
        
                    res.send({
                        status: true,
                        data: new_solicitud
                    });
    }
    catch (e) {
        res.status(500).send({
            error: e
        })
        return;
    }
}