"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Recipe_1 = require("../entity/Recipe");
/**
 * Delete Recipe by a given id.
 */
function recipeGetByIdAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a user repository to perform operations with user
        const recipeRepository = typeorm_1.getManager().getRepository(Recipe_1.Recipe);
        // load a user by a given user id
        const recipe = yield recipeRepository.findOneById(request.params.id);
        // if user was not found return 404 to the client
        if (!recipe) {
            response.status(404);
            response.end();
            return;
        }
        yield recipeRepository.remove(recipe);
        // return loaded user
        response.send(recipe);
    });
}
exports.recipeGetByIdAction = recipeGetByIdAction;
//# sourceMappingURL=deleteRecipe.js.map