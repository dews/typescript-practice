"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = require("./Model");
const Attributes_1 = require("./Attributes");
const ApiSync_1 = require("./ApiSync");
const Eventing_1 = require("./Eventing");
const rootUrl = 'http://localhost:3000';
class User extends Model_1.Model {
    static buildUser(attrs) {
        return new User(new Attributes_1.Attributes(attrs), new Eventing_1.Eventing(), new ApiSync_1.ApiSync(rootUrl));
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map