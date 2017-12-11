import {userGetAllAction} from "./controller/UserGetAllAction";
import {userGetByIdAction} from "./controller/UserGetByIdAction";
import {userSaveAction} from "./controller/UserSaveAction";
import {getRecipes} from "./controller/getAllRecipes";
import {recipeSaveAction} from "./controller/RecipeSaveAction";
import {recipeGetByIdAction} from "./controller/deleteRecipe"

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: userGetAllAction
    },
    {
        path: "/users/:id",
        method: "get",
        action: userGetByIdAction
    },
    {
        path: "/users",
        method: "post",
        action: userSaveAction
    },
	{
		path: "/recipes",
		method: "get",
		action: getRecipes
	},
	{
		path: "/recipes",
		method: "post",
		action: recipeSaveAction
	},
	{
        path: "/recipes/:id",
        method: "get",
        action: recipeGetByIdAction
    },
];