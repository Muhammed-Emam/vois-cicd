// const request = require('supertest');
// const app = require('../index.js');

// describe('GET /will', function() {
//     it('responds with hello world', function(done) {
//         request(app)
//             .get('/will')
//             .expect(200) // Expected HTTP status code
//             .expect({ response: 'Hello World' }) // Expected response JSON object
//             .end(done);
//     });
// });

var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app).get('/will').expect('{ "response": "Hello World" }', done);
    });
});