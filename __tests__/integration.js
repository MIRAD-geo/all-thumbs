const request = require('supertest');
const path = require('path');
const fs = require('fs');
const { assert } = require("console");
const server = 'http://localhost:3000/api' 

describe('Routes integration', () => {
    describe('/api', () => {

        describe('GET', () => {

            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .get('/getRealPlants')
                .expect('Content-Type', 'application\/json; charset=utf-8')
                .expect(200)
            })

            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .get('/realplant/1')
                .expect('Content-Type', 'application\/json; charset=utf-8')
                .expect(200)
            })

            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .get('/getFakePlants')
                .expect('Content-Type', 'application\/json; charset=utf-8')
                .expect(200)
            })

            it('responds with 200 status and application/json content type', () => {
                return request(server)
                .get('/fakeplant/1')
                .expect('Content-Type', 'application\/json; charset=utf-8')
                .expect(200)
            })
            
            it('responds with 404 with incorrect endpoint', () => {
                return request(server)
                .get('/random')
                .expect(404)
            })
        })
    })
})