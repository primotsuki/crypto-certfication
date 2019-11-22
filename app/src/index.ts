import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {AppRoutes} from './routes';
import {isAutenticated} from './middlewares/autenticated';

createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.listen(3000);
    console.log("Express Aplication is up and running on port 3000");
    app.use(isAutenticated);
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response, next)
                .then(() => next)
                .catch(err => next(err));
        });
    });

}).catch(error => console.log(error));
