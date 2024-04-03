"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        let users = [];
        this.app.get('/', (req, res) => {
            return res.json({ ok: true });
        });
        this.app.post('/user', (req, res) => {
            const { email, password, name } = req.body;
            const id = crypto_1.default.randomUUID();
            const data = {
                id,
                email,
                password,
                name,
            };
            users.push(data);
            return res.status(201).json(data);
        });
        this.app.get('/users', (req, res) => {
            return res.status(200).json(users);
        });
    }
    listen(port) {
        this.app.listen(port, () => console.log('server is running'));
    }
}
exports.App = App;
