import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Recipe} from "../entity/Recipe";

/**
 * Saves given user.
 */
export async function recipeSaveAction(request: Request, response: Response) {

    // get a user repository to perform operations with user
    const recipeRepository = getManager().getRepository(Recipe);	
    // create a real user object from user json object sent over http
    const newRecipe = recipeRepository.create(request.body);	
    // save received user
    await recipeRepository.save(newRecipe);
	
    // return saved user back
    response.send(newRecipe);
}