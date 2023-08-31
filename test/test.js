// var request = require('supertest');
var assert = require('assert'); // Import the assert module
var app = require('../index.js');

describe('GET /will', function() {
    it('respond with hello world', function(done) {
        request(app)
            .get('/will')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                // Use deepEqual to compare the expected and actual responses
                assert.deepEqual(res.body, { response: "Hello World" });

                done();
            });
    });
});
