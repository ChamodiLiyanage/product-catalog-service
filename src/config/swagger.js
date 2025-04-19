const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Catalog API',
      version: '1.0.0',
      description: 'API documentation for the Product Catalog Service'
    }
    // servers: [
    //   {
    //     url: "http://localhost:5000", // change this in production to your domain
    //   },
    // ],
  },
  apis: ['./src/routes/*.js'] // path to your route files
};

function example() {
  let unusedVar = '';
}

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
