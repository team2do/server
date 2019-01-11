import chai from 'chai';
import request from 'supertest';

import server from '../src/server';

chai.should();

describe('/', () => {
  describe('GET / ', () => {
    it('should respond with text message "Hello World!"', (done) => {
      request(server)
        .get('/')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);

          res.text.should.be.a('string');
          res.text.should.equal('Hello World!');

          done();
        });
    });
  });
});
