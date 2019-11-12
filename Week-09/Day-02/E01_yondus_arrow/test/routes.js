'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Testing Yondu\'s arrow', (t) => {
  request(app)
    .get('/yondu')
    .query({distance: '100.0', time: '10.0'})
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error');
      t.equal(res.body.speed, 10, "speed is calculated correctly");
      t.equal(Object.keys(res.body).length, 3, 'Answer JSON has correct length')
      t.end();
    });
});

test('Testing Yondu\'s teleporting arrow', (t) => {
  request(app)
    .get('/yondu')
    .query({distance: '100.0', time: '0'})
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error');
      t.equal(res.body.speed, null, 'Answer is null, as expected');
      t.end();
    });
});

test('Testing Yondu\'s arrow with no parameters given', (t) => {
  request(app)
    .get('/yondu')
    .expect('Content-Type', /json/)
    .expect(404)
    .end((err, res) => {
      t.error(err, 'No error');
      t.equal(res.body.error, 'No parameters have been set.', 'Proper error response is given');
      t.end();
    })
});