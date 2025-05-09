import request from 'supertest';
import app from '../../src/app';

describe('User API', () => {
    let createdId: number;

    it('should create a user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Test User', email: 'test@example.com' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        createdId = res.body.id;
    });

    it('should get all users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a user by ID', async () => {
        const res = await request(app).get(`/users/${createdId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Test User');
    });

    it('should update a user', async () => {
        const res = await request(app)
            .put(`/users/${createdId}`)
            .send({ name: 'Updated Name' });

        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Updated Name');
    });

    it('should delete a user', async () => {
        const res = await request(app).delete(`/users/${createdId}`);
        expect(res.statusCode).toBe(204);
    });

    it('should return 404 for deleted user', async () => {
        const res = await request(app).get(`/users/${createdId}`);
        expect(res.statusCode).toBe(404);
    });
});
