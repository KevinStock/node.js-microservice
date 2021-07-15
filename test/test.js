var expect = require('chai').expect;
var request = require('request');

describe('/GET distance', function() {
    describe('Distance from 63109 to 63139', function() {
        var url = "http://localhost:3000/distance/63109/63139"
        it('returns status 200', function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it ('returns the proper distane', function(done) {
            request(url, function(error, response, body) {
                expect(JSON.parse(body).distance).to.equal(1.792);
                done();
            })
        });
    });
});

describe('/GET about', function() {
    var url = "http://localhost:3000/about";
    it('returns status 200', function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('returns the proper data', function(done) {
        request(url, function(error, response, body) {
            expect(JSON.parse(body).name).to.equal('nodemain');
            expect(JSON.parse(body).version).to.equal('1.0.0');
            done();
        });
    });
});