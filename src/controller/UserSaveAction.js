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
const User_1 = require("../entity/User");
/**
 * Saves given user.
 */
function userSaveAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a user repository to perform operations with user
        const userRepository = typeorm_1.getManager().getRepository(User_1.User);
        // create a real user object from user json object sent over http
        const newUser = userRepository.create(request.body);
        // save received user
        yield userRepository.save(newUser);
        // return saved user back
        response.send(newUser);
    });
}
exports.userSaveAction = userSaveAction;
//# sourceMappingURL=UserSaveAction.js.map