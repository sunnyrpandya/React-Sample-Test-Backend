"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserGetAllAction_1 = require("./controller/UserGetAllAction");
const UserGetByIdAction_1 = require("./controller/UserGetByIdAction");
const UserSaveAction_1 = require("./controller/UserSaveAction");
const getAllRecipes_1 = require("./controller/getAllRecipes");
const RecipeSaveAction_1 = require("./controller/RecipeSaveAction");
const deleteRecipe_1 = require("./controller/deleteRecipe");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/users",
        method: "get",
        action: UserGetAllAction_1.userGetAllAction
    },
    {
        path: "/users/:id",
        method: "get",
        action: UserGetByIdAction_1.userGetByIdAction
    },
    {
        path: "/users",
        method: "post",
        action: UserSaveAction_1.userSaveAction
    },
    {
        path: "/recipes",
        method: "get",
        action: getAllRecipes_1.getRecipes
    },
    {
        path: "/recipes",
        method: "post",
        action: RecipeSaveAction_1.recipeSaveAction
    },
    {
        path: "/recipes/:id",
        method: "get",
        action: deleteRecipe_1.recipeGetByIdAction
    },
];
//# sourceMappingURL=routes.js.map