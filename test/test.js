#!/usr/bin/env node
var request = require('supertest');
var app = require('../index.js');

describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app)
            .get('/will')
            .expect(200) // Expecting HTTP status code 200
            .expect({ response: "Hello World" }) // Expecting a JSON response
            .end(done); // End the test when the request is complete
    });
});
