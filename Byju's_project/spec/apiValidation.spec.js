var request = require('request');
var baseUrl = 'https://api.myjson.com/bins/kez8a';

describe('Job Search end point check', function() {
  describe('GET /', function() {
    it('returns status code 200', function(done) {
      request.get(baseUrl, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
