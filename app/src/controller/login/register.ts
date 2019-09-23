import {Request, Response} from "express";
import * as bcrypt from "bcrypt";
import {getConnection} from "typeorm";
import {Usuario} from '../../entity/usuario';

var BCRYPT_SALT_ROUNDS = 12;
export async function RegisterUser(req: Request, res: Response) {

    let user = req.body;
    bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS)
    .then(async hashedPassword=>{
        const new_user = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Usuario)
        .values({ 
        nombre: user.nombre,
        username: user.username,
        email: user.email,
        apellido_paterno: user.apellido_paterno,
        apellido_materno: user.apellido_materno,
        password: hashedPassword
        })
        .execute();
    })
    .then(function(){
        res.send();
    })
    .catch(err=>{
        console.log(err)
    });
}