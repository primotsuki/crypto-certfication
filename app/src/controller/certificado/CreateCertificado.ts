import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Certificado} from "../../entity/certificado";
import * as IPFS from 'ipfs';
export async function CreateCertificado(req: Request, res: Response, next) {
    let certificado = req.body;
        const node = new IPFS();
    node.on('ready', ()=>{
        node.add(Buffer.from(JSON.stringify(certificado)), async (err, ipfsRes)=>{
            const new_certificado = await getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(Certificado)
                    .values({
                        wallet: certificado.wallet,
                        certificate_hash: ipfsRes[0].hash,
                        json_data: JSON.stringify(certificado)
                    })
                    .execute();
            updateRelation("usuarios",new_certificado.identifiers[0].id,certificado.alumno_id);
            updateRelation("solicitudes",new_certificado.identifiers[0].id,certificado.solicitud_id);
            updateRelation("institucion",new_certificado.identifiers[0].id, certificado.institucion_id);
            let res_data = {
                id: new_certificado.identifiers[0].id,
                certificate_hash: ipfsRes[0].hash
            };
            res.send({
                status: true,
                data: res_data
            });
            node.stop();
        });
    });   
}
async function updateRelation(relation: string, certificado_id: number, id: number) {
    await getConnection()
            .createQueryBuilder()
            .relation(Certificado, relation)
            .of(certificado_id)
            .set(id);
}