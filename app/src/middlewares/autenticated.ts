import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

const env = dotenv.config()

export async function isAutenticated( req: Request, res: Response, next) {
    if(req.path=='/login' || req.path=='/register') {
      next();
    } else {
      var token = req.headers['authorization'];
    if(!token) {
        res.status(401).send({
            error: "not authorized"
          })
        return;
    }
    token = token.replace('Bearer ', '')

    jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, user) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        next();
      }
    })
    }
}