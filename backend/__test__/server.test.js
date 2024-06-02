const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let server;
beforeAll(async () => {
    await new Promise(resolve => {
         server = app.listen(PORT, () => {
            console.log(`Server for tests is created ${PORT}`);
            resolve(server);
        });
    });
});


describe('Post request. for calaculate due date', () => {
    it('Test should return status code of 200', async () => {
        const response = await request(app)
            .post('/calculateDueDate')
            .send({}); 
        expect(response.statusCode).toBe(200);
    });
});

app.post('/calculateDueDate', async (req, res) => {
    res.json({ statusCode: 200 });
});


afterAll(async () => {
    await new Promise(resolve => {
        server.close(resolve);
    });
});

