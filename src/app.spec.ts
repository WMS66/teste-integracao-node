import request from 'supertest'
import { App } from './app'

describe('My first test in 2024', () => {
    const app = new App().app
    it('should test the server running', async () => {
        const response = await request(app).get('/')
        expect(response.body).toStrictEqual({ ok: true })
    })

    it('should check if create user', async () => {
        const response = await request(app).post('/user').send({
            name: 'Cabral',
            email: ' cabral@email.com',
            password: '1234567890',
        })
        console.log(' ~ file: app.spec.ts:16 ~ response ~ response:', response)
        expect(response.statusCode).toEqual(201)
        expect(response.body).toHaveProperty('id')
    })

    it('should check if get user', async () => {
        const response = await request(app).get('/users')
        console.log(' ~ file: app.spec.ts:16 ~ response ~ response:', response)
        expect(response.statusCode).toEqual(200)
    })
})
