Task Management Backend

This repository contains the backend of the Task Management application.
The backend is built using Node.js, Express, and MongoDB, and it provides REST APIs for user authentication and task management.

Prerequisites

Before running the backend locally, make sure the following are installed on your system:

Node.js (version 18 or above)

npm (comes with Node.js)

MongoDB Atlas account or a local MongoDB instance

Project Setup (Local)

Follow the steps below to run the backend server on your local machine.

Step 1: Clone the Repository

Clone the backend repository from GitHub:

git clone https://github.com/Weknowd1/task-management-backend.git

Navigate into the project directory:

cd task-management-backend

Step 2: Install Dependencies

Install all required npm packages:

npm install

Step 3: Environment Variables

Create a .env file in the root directory of the project and add the following values:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Make sure your MongoDB Atlas Network Access allows connections from your IP address.

Step 4: Start the Server

Start the backend server using the following command:

node server.js

Step 5: Verify the Server

If the server starts successfully, you should see output similar to:

Server running on port 5000
MongoDB connected

The backend API will be available at:

http://localhost:5000

*API Endpoints
Authentication*

POST /auth/register – Register a new user

POST /auth/login – Login an existing user

Tasks (Protected Routes)

GET /tasks – Get all tasks

POST /tasks – Create a new task

PUT /tasks/:id – Update an existing task

DELETE /tasks/:id – Delete a task

*Notes*

The backend uses JWT-based authentication.

All task-related routes are protected and require a valid token.

This project is intended for local development and assignment evaluation.

Author

Vinod
Task Management Application – Backend



