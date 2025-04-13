const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../src/app');
const Product = require('../src/models/Product');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Product.deleteMany(); // Clean DB after each test
});

describe('Product API', () => {
  it('should create a product', async () => {
    const res = await request(app).post('/api/products').send({
      name: 'Memory Mouse',
      description: 'In-memory test',
      price: 9.99,
      category: 'Testing',
      stock: 20
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Memory Mouse');
  });

  it('should retrieve all products', async () => {
    await Product.create({ name: 'Item', price: 10 });
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
