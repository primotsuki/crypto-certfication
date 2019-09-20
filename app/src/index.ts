import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {AppRoutes} from './routes';
import {isAutenticated} from './middlewares/autenticated';

createConnection().then(async connection => {

    const app = express();
    app.use(bodyParser.json());



    app.listen(3000);
    console.log("Express Aplication is up and running on port 3000");
    app.use(isAutenticated);
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
