import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Certificado} from "../../entity/certificado";
import * as IPFS from 'ipfs';

export async function CreateCertificado(req: Request, res: Response, next) {
    let certificado = req.body;
    IPFS.add(certificado);
}