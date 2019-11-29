import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import {Institucion} from '../../entity/institucion';
import * as dotenv from 'dotenv';

const env = dotenv.config();

export async function getInstitucion(req: Request, res: Response) {
    try {
        const institucion = await getManager()
        .createQueryBuilder(Institucion, "usuario")
        .getMany();
        res.send({
            response: true,
            data: institucion
        });
    } catch (e) {
        res.status(500).send({
            error: 'hubo un problema obteniendo los datos'
        })
        return;
    }
}