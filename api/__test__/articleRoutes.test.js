import request from 'supertest';
import app from '../app.js'; 
import express from 'express';
import router from '../routes/articleRoutes.js';

describe('ArticleRoutes Tests', () => {
  test('GET /api/article/get-articles returns articles', async () => {
    const response = await request(app)
      .get('/api/article/get-articles')
      .expect('Content-Type', /json/)
      .expect(200); // Status HTTP attendu

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          content: expect.any(String),
        }),
      ])
    );

    expect(response.body).toHaveLength(2); // Vérifiez que le tableau contient 2 articles
  });

  test('GET /api/article/get-article/:id returns an article', async () => {
    const response = await request(app)
      .get('/api/article/get-article/1')
      .expect('Content-Type', /json/)
      .expect(200); // Status HTTP attendu

    expect(response.body).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        content: expect.any(String),
      })
    );
  });

  test('GET /api/article/get-article/:id returns 404 if article not found', async () => {
    await request(app)
      .get('/api/article/get-article/3')
      .expect('Content-Type', /json/)
      .expect(404); // Status HTTP attendu
  });

  // BEGIN: Test for articleRoutes.js
  test('Router should be defined', () => {
    expect(router).toBeDefined();
  });
  // END: Test for articleRoutes.js

});