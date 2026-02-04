# Routes Documentation

This document describes all available routes/endpoints in the application.

## Base URL

```
http://localhost:3000
```

*The port can be configured via the `PORT` environment variable (default: 3000)*

---

## Routes Overview

### Health Check

#### GET `/health`

Check the server status and health.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-02-04T12:00:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Server is healthy

---

### Welcome Endpoint

#### GET `/`

Returns a welcome message.

**Response:**
```json
{
  "message": "Welcome to the API"
}
```

**Status Codes:**
- `200 OK` - Request successful

---

## Error Responses

All endpoints may return the following error responses:

### 500 Internal Server Error

```json
{
  "error": "Something went wrong!"
}
```

---

## Adding New Routes

When adding new routes, please document them following this template:

```markdown
### METHOD `/path`

Brief description of what this endpoint does.

**Request Parameters:**
- `param1` (type, required/optional) - Description
- `param2` (type, required/optional) - Description

**Request Body:**
```json
{
  "field1": "value",
  "field2": 123
}
```

**Response:**
```json
{
  "data": {}
}
```

**Status Codes:**
- `200 OK` - Success
- `400 Bad Request` - Invalid input
- `401 Unauthorized` - Authentication required
- `404 Not Found` - Resource not found
```

---

## Route Organization

Routes are organized as follows:

```
src/
├── routes/
│   └── index.js          # Main router definition
├── controllers/
│   └── main-controller.js # Route handlers/logic
└── index.js              # App entry point
```

---

## Testing Routes

You can test routes using:

- **cURL:**
  ```bash
  curl http://localhost:3000/health
  ```

- **Postman** or **Insomnia**

- **Jest** (see `routes.test.js`)
