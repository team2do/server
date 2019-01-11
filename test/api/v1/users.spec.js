import request from 'supertest';

import server from '../../../src/server';

describe('/users', () => {
  describe('POST /', () => {
    it('should respond with status code 201', (done) => {
      request(server)
        .post('/api/v1/users')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Byeongguk',
          lastName: 'Gong'
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err) => {
          if (err) return done(err);

          done(err);
        });
    });

    it('should respond with status code 400', (done) => {
      request(server)
        .post('/api/v1/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err) => {
          if (err) return done(err);

          done(err);
        });
    });
  });
});
