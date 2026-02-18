# student-management-API
this is a simple express.js API for adding products and adding students. both are in the same project. the controller are different, but the route is still on the same file 

# Installation and Setup
1. Clone my repo
git clone https://github.com/Fluncks/student-management-API
cd student-management-API

3. Install dependencies
npm install

4. Run the application
npm run dev

Server will run at:
http://localhost:3000

# API Endpoints
GET /
Response:
{
 "message": "Welcome to the Express API",
 "version": "1.0.0"
}

GET /health
Response:
{
 "status": "ok",
 "timestamp": "2026-02-05T00:00:00.000Z"
}

GET /about
Response:
{
 "name": "CCIT Student API",
 "version": "1.0.0",
 "author": "Nicholas Gabriel Adinata",
 "description": "A simple API for learning Express.js"
}

GET /greet/:name
Example:
GET /greet/Budi
Response:
{
 "message": "Hello, Budi! Welcome to CCIT API."
}

# Products API

GET /products
Response:
{
 "success": true,
 "count": 3,
 "data": [...]
}

GET /products/:id
Response:
{
 "success": true,
 "data": {...}
}

POST /products
Request Body:
{
 "name": "Monitor",
 "price": 2000000,
 "stock": 20
}

PUT /products/:id
Request Body:
{
 "price": 12000000,
 "stock": 5
}

DELETE /products/:id
Response:
{
 "success": true,
 "message": "Product deleted successfully"
}



# Students API

GET /students
Response:
{
 "success": true,
 "count": 3,
 "data": [...]
}

GET /students/:id
Response:
{
 "success": true,
 "data": {...}
}

POST /students
Request Body:
{
 "name": "Raka",
 "email": "raka@ccit.edu",
 "major": "Software Engineering",
 "semester": 4,
 "gpa": 3.6
}

PUT /students/:id
Request Body:
{
 "semester": 5,
 "gpa": 3.7
}

DELETE /students/:id
Response:
{
 "success": true,
 "message": "Student deleted successfully"

 ALL THANKS TO MY GOAT PAK HUDYA @PEROGEREMMER
