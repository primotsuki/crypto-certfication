import {Request, Response} from 'express';
import {getManager} from 'typeorm';
import { Certificado } from '../../entity/certificado';

export async function validarCertificado(req: Request, res: Response) {
    try {
        const certificados = await getManager()
        .createQueryBuilder(Certificado, "certificado")
        .leftJoinAndSelect("certificado.institucion", "institucion")
        .where("certificado.certificate_hash = :hash",{hash: req.params.hash})
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