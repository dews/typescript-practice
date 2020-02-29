"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Eventing_1 = require("./Eventing");
class Collection {
    constructor() {
        this.models = [];
        this.events = new Eventing_1.Eventing();
        this.on = this.events.on;
        this.trigger = this.events.trigger;
    }
}
exports.Collection = Collection;
//# sourceMappingURL=Colletcion.js.map