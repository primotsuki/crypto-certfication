import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import { Certificado } from '../../entity/certificado';

export async function getCertificadosInstitucion(req: Request, res: Response) {
    try {
        const certificados = await getManager()
        .createQueryBuilder(Certificado, "certificado")
        .leftJoinAndSelect("certificado.institucion", "institucion")
        .where("certificado.institucionId = :institucion_id",{institucion_id: req.params.institucion_id})
        .orderBy("certificado.id","DESC")
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