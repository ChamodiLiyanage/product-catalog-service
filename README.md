# 🛍️ Product Catalog Microservice

This repository contains a Node.js and Express-based microservice designed to manage a product catalog for an e-commerce platform. It supports full CRUD operations, integrates with MongoDB, and is containerized using Docker for seamless deployment on cloud platforms. The project adheres to modern DevOps practices, including CI/CD pipelines and security integrations.

---

## 📦 Features

- RESTful API for product management (Create, Read, Update, Delete)
- MongoDB integration using Mongoose
- Swagger UI for interactive API documentation
- Dockerized for containerized deployments
- CI/CD pipeline configured with GitHub Actions
- Deployed on AWS ECS (Elastic Container Service)
- Security measures implemented using AWS IAM roles and security groups
- Static code analysis integrated with SonarCloud for DevSecOps practices

---

## 🧱 Architecture Overview

The microservice follows a layered architecture:

- **API Layer**: Handles HTTP requests and routes them to appropriate controllers.
- **Controller Layer**: Processes incoming requests, interacts with services, and returns responses.
- **Service Layer**: Contains business logic and interacts with the data access layer.
- **Data Access Layer**: Manages database operations using Mongoose models.

The service is containerized using Docker and deployed on AWS ECS, ensuring scalability and high availability.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB instance (local or cloud-based)
- Docker and Docker Compose
- AWS CLI configured with appropriate permissions

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ChamodiLiyanage/product-catalog-service.git
   cd product-catalog-service
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/product_catalog
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

The service will be accessible at `http://localhost:5000`.

---

## 🧪 Running Tests

To execute unit tests:

```bash
npm test
```

---

## 📄 API Documentation

Interactive API documentation is available via Swagger UI:

```
http://localhost:5000/api-docs
```

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t product-catalog-service .
```

### Run Docker Container

```bash
docker run -d -p 5000:5000 --env-file .env product-catalog-service
```

### Docker Compose

Alternatively, use Docker Compose:

```bash
docker-compose up -d
```

---

## ☁️ Cloud Deployment

The microservice is deployed on AWS ECS using the following steps:

1. **Docker Image Push:**
   - Build and push the Docker image to AWS ECR (Elastic Container Registry).

2. **ECS Configuration:**
   - Create a task definition specifying the Docker image and resource requirements.
   - Set up a service to run the task definition.
   - Configure a load balancer for traffic distribution.

3. **Networking and Security:**
   - Define security groups to control traffic.
   - Assign IAM roles with least privilege to ECS tasks.

---

## 🔐 Security Measures

- **IAM Roles:** Used to grant minimal required access to ECS tasks.
- **Security Groups:** Restrict access to the microservice.
- **DevSecOps:** SonarCloud integrated for static code analysis.

---

## ⚙️ CI/CD Pipeline

CI/CD pipeline using GitHub Actions:

- **CI:** Triggers on push/pull request. Runs tests, lints, and SonarCloud scan.
- **CD:** Builds and pushes Docker image to AWS ECR and deploys via ECS.

---

## 📂 Project Structure

```
product-catalog-service/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
├── tests/
├── .github/workflows/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
└── sonar-project.properties
```

---

## 🧠 Design Decisions

- Node.js + Express for lightweight service.
- MongoDB for flexible data handling.
- Docker for consistent environments.
- AWS ECS for scalable deployment.
- Security via IAM + Security Groups.

---

## 🛠️ Future Improvements

- Add JWT authentication.
- Implement logging and monitoring.
- Optimize DB queries and indexing.
- Configure auto-scaling on ECS.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Feel free to fork the repo and create PRs for improvements or bug fixes.

---

*This README was generated for the Cloud Computing Assignment of the SE4010 module at SLIIT.*

