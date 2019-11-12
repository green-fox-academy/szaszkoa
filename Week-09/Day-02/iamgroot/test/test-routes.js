'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Groot endpoint correct behavior', (t) => {
  request(app)
    .get('/groot')
    .query({message: 'somemessage'})
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error.');
      t.equal(res.body.translated,"I am Groot!", 'Message is translated.');
      t.equal(res.body.recieved, "somemessage", 'Query is piped in successfully');
      t.end()
    });
});

test('Groot endpoint error behavior.', (t) => {
  request(app)
    .get('/groot')
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, res) => {
      t.error(err, 'No error');
      t.equal(res.body.error, "I am Groot!", 'Error message is correctly sent back.');
      t.end();
    });
});
