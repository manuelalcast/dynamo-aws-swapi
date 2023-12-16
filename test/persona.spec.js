const app = require('../index')
const request = require('supertest');

describe('GET / persona', () =>{
    test('should response status code 200', async () => {
        const response = await request(app).get('/persona').send();
        expect(response.statusCode).toBe(200);
    });

    test('should response an array', async () => {
        const response = await request(app).get('/persona').send();
        expect(response.body).toBeInstanceOf(Array);
    });

});

describe('POST / persona', () =>{

    describe('when send an object in body', () =>{

        let objPost = { "nombre": "Nombre", "apellido": "Apellido", "id": "6548651386746818", "edad": 25, "correo": "correo@gmail.com" }

        test('should response status code 200', async () => {
            const response = await request(app).post('/persona').send(objPost);
            expect(response.statusCode).toBe(200);
        });
        
        test('should response with the ID', async () => {
            const response = await request(app).post('/persona').send(objPost);
            expect(response.body.id).toBeDefined();
        });

    });

    describe("when don't send an object in body", () =>{
        test('should response status code 400', async () => {
            const response = await request(app).post('/persona').send({});
            expect(response.statusCode).toBe(400);
        });
    });

});