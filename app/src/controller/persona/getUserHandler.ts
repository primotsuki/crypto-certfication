import {Request, Response} from "express";
import {getConnection, getManager} from "typeorm";
import {Usuario} from '../../entity/usuario';
import { ClientResponse } from "http";

export async function getUsuarioData(req: Request, res: Response, next) {
    try {
        const usuario = await getManager()
                .createQueryBuilder(Usuario, 'usuario')
                .leftJoinAndSelect('usuario.instituciones', 'institucion')
                .where("usuario.id = :usuario_id", {usuario_id: req.params.user_id})
                .getOne()
        res.send({
            response:true,
            data: usuario
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            error: 'user not found'
        })
    }
}