# Express.js API Practice - CCIT

A REST API built with Express.js for learning purposes. This project includes basic routes, CRUD operations with in-memory storage, and comprehensive testing.

## Features

- Express.js 5.x with ES modules support
- Environment variable configuration with dotenv
- Basic route structure with controllers
- CRUD operations for Products (in-memory array)
- Error handling middleware
- Jest testing setup with supertest
- Development watch mode

## Requirements

- Node.js 18.x or higher (with ES modules support)

## Installation

```bash
npm install
```

## Configuration

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
PORT=3000
NODE_ENV=development
```

## Running the Application

Development mode with auto-restart on file changes:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## Project Structure

```
src/
├── controllers/
│   └── main-controller.js    # Route handlers
├── routes/
│   └── index.js              # API routes
└── index.js                  # Application entry point

tests/
├── routes.test.js            # Basic route tests
└── products.test.js          # Products CRUD tests
```

## Available Routes

### Basic Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| GET | `/health` | Health check with timestamp |
| GET | `/about` | API information |
| GET | `/greet/:name` | Greet user by name |

### Products CRUD Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

### Example Requests

**Get all products:**
```bash
curl http://localhost:3000/products
```

**Get single product:**
```bash
curl http://localhost:3000/products/1
```

**Create product:**
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Monitor","price":2000000,"stock":20}'
```

**Update product:**
```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":12000000,"stock":5}'
```

**Delete product:**
```bash
curl -X DELETE http://localhost:3000/products/2
```

**Greet endpoint:**
```bash
curl http://localhost:3000/greet/Budi
```

## Testing

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server |
| `npm run dev` | Start in development mode with watch |
| `npm test` | Run tests |

## Response Format

All API responses follow this format:

**Success:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## License

ISC
