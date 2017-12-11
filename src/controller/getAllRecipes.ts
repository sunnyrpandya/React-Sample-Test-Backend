import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Recipe} from "../entity/Recipe";

/**
 * Loads all recipies from the database.
 */
export async function getRecipes(request: Request, response: Response) {

    // get a user repository to perform operations with user
    const userRepository = getManager().getRepository(Recipe);

    // load a user by a given post id
    const recipies = await userRepository.find();

    // return loaded recipies
    response.send(recipies);
}