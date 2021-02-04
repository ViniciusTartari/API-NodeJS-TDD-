const request = require('supertest');

const app = require('../../src/app');

test('Deve listar todos os usuarios', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        });        
});

test.only('Deve inserir um novo usuario', () => {
    const mail = `${Date.now()}@gmail.com`;
    return request(app).post('/users')
        .send({name : 'Walter White', mail, passwd: '123456'})
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Walter White');
        })
});