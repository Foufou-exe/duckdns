import request from 'supertest';
import app from '../app.js';
import notFoundHandler from '../middleware/notFoundHandler.js';

describe('notFoundHandler Tests', () => {
  test('GET /nonexistent-url returns 404', async () => {
    const response = await request(app)
      .get('/nonexistent-url')
      .expect('Content-Type', /text/)
      .expect(404); // Expected HTTP status

    expect(response.text).toBe('Page not found!');
  });

  test('POST /nonexistent-url returns 404', async () => {
    const response = await request(app)
      .post('/nonexistent-url')
      .expect('Content-Type', /text/)
      .expect(404); // Expected HTTP status

    expect(response.text).toBe('Page not found!');
  });

  test('PUT /nonexistent-url returns 404', async () => {
    const response = await request(app)
      .put('/nonexistent-url')
      .expect('Content-Type', /text/)
      .expect(404); // Expected HTTP status

    expect(response.text).toBe('Page not found!');
  });

  test('DELETE /nonexistent-url returns 404', async () => {
    const response = await request(app)
      .delete('/nonexistent-url')
      .expect('Content-Type', /text/)
      .expect(404); // Expected HTTP status

    expect(response.text).toBe('Page not found!');
  });
});