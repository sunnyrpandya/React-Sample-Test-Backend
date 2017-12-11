import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Recipe} from "../entity/Recipe";

/**
 * Delete Recipe by a given id.
 */
export async function recipeGetByIdAction(request: Request, response: Response) {

    // get a user repository to perform operations with user
    const recipeRepository = getManager().getRepository(Recipe);

    // load a user by a given user id
    const recipe = await recipeRepository.findOneById(request.params.id);

    // if user was not found return 404 to the client
    if (!recipe) {
        response.status(404);
        response.end();
        return;
    }
	
	await recipeRepository.remove(recipe);

    // return loaded user
    response.send(recipe);
}
