const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // adjust path if needed

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Swagger UI endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
//test commit
app.use('/api/products', productRoutes);

module.exports = app;
