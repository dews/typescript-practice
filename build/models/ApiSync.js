"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiSync {
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
        this.rootUrl = rootUrl;
    }
    fetch(id) {
        return fetch(`${this.rootUrl}/users/${id}`)
            .then(res => res.json())
            .then(json => json);
    }
    save(data) {
        const { id } = data;
        if (id) {
            return fetch(`${this.rootUrl}/users/${id}`, {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        }
        return fetch(`${this.rootUrl}users`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
}
exports.ApiSync = ApiSync;
//# sourceMappingURL=ApiSync.js.map