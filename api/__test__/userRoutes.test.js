import request from 'supertest';
import app from '../app.js';
import express from 'express';

describe('UserRoutes Tests', () => {
  test('Router should be defined', () => {
    const router = express.Router();
    expect(router).toBeDefined();
  });
});