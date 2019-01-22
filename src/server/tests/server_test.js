const request = require('supertest');
const mongoose = require('mongoose');

describe('loading express', function () {
  let server;
  
  beforeEach(function () {
    // Clear server in cache.
    delete require.cache[require.resolve('../index')];
    server = require('../index');
  });
  afterEach(function (done) {
    server.close(done);
    mongoose.connection.close();
  });
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/api')
      .expect(200, done);
  });
  it('fails on invalid route', function testPath(done) {
    request(server)
      .get('/api/foo')
      .expect(404, done);
  });
});