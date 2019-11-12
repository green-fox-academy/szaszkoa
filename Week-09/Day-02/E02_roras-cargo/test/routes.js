'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Test message', (t) => {
  request(app)
    .get()
})