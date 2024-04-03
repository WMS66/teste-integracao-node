"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("./app");
describe('My first test in 2024', () => {
    const app = new app_1.App().app;
    it('should test the server running', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/');
        expect(response.body).toStrictEqual({ ok: true });
    }));
    it('should check if create user', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).post('/user').send({
            name: 'Cabral',
            email: ' cabral@email.com',
            password: '1234567890',
        });
        console.log(' ~ file: app.spec.ts:16 ~ response ~ response:', response);
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('id');
    }));
    it('should check if get user', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/users');
        console.log(' ~ file: app.spec.ts:16 ~ response ~ response:', response);
        expect(response.statusCode).toEqual(200);
    }));
});
