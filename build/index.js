"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var morgan_1 = __importDefault(require("morgan"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(cookie_session_1.default({ name: 'yyy', keys: ['sdfsglek'], maxAge: 60 * 1000 }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    req.session.nowInMinutes = Math.floor(Date.now() / 60e3);
    next();
});
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
//# sourceMappingURL=index.js.map