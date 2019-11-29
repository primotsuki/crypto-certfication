import {Request, Response} from 'express';
import {getConnection} from 'typeorm';
import {Certificado} from '../../entity/certificado';
export async function UpdateCertificado(req: Request, res: Response) {
    let certificado = req.body;
    try {
        let updated_col = await getConnection()
        .createQueryBuilder()
        .update(Certificado)
        .set({
            json_response: JSON.stringify(certificado.response)
        })
        .where("id = :id",{id: certificado.certificado_id})
        .execute();
        res.send({
            response: true,
            data: updated_col
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            error: 'Hubo un problema actualizando los datos'
        })
    }
}