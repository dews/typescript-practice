"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attributes {
    constructor(data) {
        this.data = data;
        this.get = (key) => {
            return this.data[key];
        };
        this.set = (update) => {
            Object.assign(this.data, update);
        };
    }
    getAll() {
        return this.data;
    }
}
exports.Attributes = Attributes;
//# sourceMappingURL=Attributes.js.map