import {Request, Response} from 'express';
import * as jwt from "jsonwebtoken";
import {getManager} from "typeorm";
import {Usuario} from '../../entity/usuario';
import * as bcrypt from "bcrypt";
import * as dotenv from 'dotenv';

const env = dotenv.config();

export async function loginUser(req: Request, response: Response){
    var email = req.body.email;
    var password = req.body.password;
    const user = await getManager()
    .createQueryBuilder(Usuario, "usuario")
    .where("usuario.email = :email", { email: email })
    .getOne();
    bcrypt.compare(password, user.password)
    .then(res=>{
        if(res){
            var tokenData = {
                email: user.email,
                id: user.id
              }
            
              var token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
                 expiresIn: 60 * 60 * 24 // expires in 24 hours
              })
            
              response.send({
                response: true,
                data: {
                  usuario_id:user.id,
                  token: token 
                }
              })
        } else {
            res.status(401).send({
                error: 'usuario o contraseña inválidos'
              })
              return;
        }
    })
}