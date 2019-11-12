'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Testing the status of the ship:', (t) => {
  request(app)
    .get('/rocket')
    .expect('Content-type', /json/)
    .expect(200)
    .end((err, res) => {

      let status = {
        "caliber25": 0,
        "caliber30": 0,
        "caliber50": 0,
        "shipstatus": "empty",
        "ready": false
      };

      t.error(err, 'No error');
      t.deepEqual(res.body, status, '--Empty ships attributes are as expected');
      t.equal(res.body.ready, false, '--Empty ship has ready attribute *false*');
      t.end()
    });
});

test('Testing the fill on the ship', (t) => {
  request(app)
    .get('/rocket/fill')
    .query({ caliber: '.50', amount: 6250 })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error on fill with amount != 0');
      t.equal(res.body.shipstatus, '50%', '--Fill percentage is correct');
    });
  request(app)
    .get('/rocket/fill')
    .query({ caliber: '.50', amount: 0 })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error on fill with amount = 0');
      t.equal(res.body.shipstatus, 'empty', '--Shipstatus is *empty* as expected');
    });
  request(app)
    .get('/rocket/fill')
    .query({ caliber: '.50', amount: 12500 })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error on fully filling the ship');
      t.equal(res.body.shipstatus, 'full', '--Shipstatus is *full* as expected');
    });
  request(app)
    .get('/rocket/fill')
    .query({caliber: '.50', amount: 13000})
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error on overloading the ship');
      t.equal(res.body.shipstatus, 'overloaded', '--Shipstatus is *overloaded* as expected');
      t.equal(res.body.ready, false, '--Ship\'s status for flying is *false* as expected');
    });
  request(app)
    .get('/rocket/fill')
    .query({ caliber: '.50', amount: 5000 })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {

      let fullResponse = {
        "received": '.50',
        "amount": 5000,
        "shipstatus": '40%',
        "ready": false
      };
      
      t.error(err, 'No error on testing the full response JSON');
      t.deepEqual(res.body, fullResponse, '--All keys and values are as expected');
      t.end();
    });
});

test('Testing the *ready* key', (t) => {
  request(app)
    .get('/rocket/fill')
    .query({caliber: '.50', amount: 12500})
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.error(err, 'No error on fully filling the ship');
      t.equal(res.body.ready, true, '--Status is *true* when fully loaded');
      t.end();
    });
});

test('Testing empty query', (t) => {
  request(app)
    .get('/rocket/fill')
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, res) => {
      t.error(err, 'No error when sending no query');
      t.equal(res.body.error, 'No query sent', '--Proper response when not sending a query');
      t.end();
    });
});