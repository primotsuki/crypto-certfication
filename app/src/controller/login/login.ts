import {Request, Response} from 'express';
import * as jwt from "jsonwebtoken";
import {getConnection} from "typeorm";
import {Usuario} from '../../entity/usuario';
import * as bcrypt from "bcrypt";

export async function loginUser(req: Request, response: Response){
    var username = req.body.username;
    var password = req.body.password;

    const user = await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(Usuario, "user")
    .where("user.username = :username", { username: username })
    .getOne();

    bcrypt.compare(password, user.password)
    .then(res=>{
        if(res){
            var tokenData = {
                username: user.username,
                id: user.id
              }
            
              var token = jwt.sign(tokenData, 'Secret Password', {
                 expiresIn: 60 * 60 * 24 // expires in 24 hours
              })
            
              response.send({
                token
              })
        } else {
            res.status(401).send({
                error: 'usuario o contraseña inválidos'
              })
              return
        }
    })
}