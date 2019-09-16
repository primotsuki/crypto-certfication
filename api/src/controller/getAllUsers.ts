import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Usuario} from "../entity/usuario";

/**
 * Loads all posts from the database.
 */
export async function getAllUsers(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const userRepository = getManager().getRepository(Usuario);

    // load a post by a given post id
    const users = await userRepository.find();

    // return loaded posts
    response.send(users);
}