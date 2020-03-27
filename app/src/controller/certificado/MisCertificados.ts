import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import { Certificado } from '../../entity/certificado';

export async function getCertificados(req: Request, res: Response) {
    try {
        const certificados = await getManager()
        .createQueryBuilder(Certificado, "certificado")
        .leftJoinAndSelect("certificado.institucion", "institucion")
        .where("certificado.usuariosId = :usuario_id",{usuario_id: req.params.usuario_id})
        .getMany();

        res.send({
            response: true,
            data: certificados
        });
    } catch (e) {
         console.log(e);
        res.status(500).send({
            error: 'Hubo un error obteniendo los datos'
        })
    }
}