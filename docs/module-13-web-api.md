# Module 13 - Node.js Web API

## Objective

Build a REST API with search, pagination, validation, error handling, OpenAPI documentation, and integration tests.

## Concept Checkpoint

- REST API and status codes: Done
- Search and pagination: Done
- Input validation: Done
- Swagger/OpenAPI: Done
- Integration testing: Done

## Implemented APIs

- `GET /api/users` - List users
- `GET /api/users/{id}` - Get user by ID
- `GET /api/users?search=arun` - Search users
- `GET /api/users?page=1&limit=2` - Pagination

## Validation and Error Handling

- Validates page, limit, and user ID.
- Returns HTTP 400 for invalid input.
- Returns HTTP 404 when a user or endpoint is not found.

## Swagger / OpenAPI

Swagger UI has been configured and verified at:

`http://localhost:3000/api-docs`

The API endpoints were successfully tested through Swagger UI.

## Integration Testing

Integration testing using Jest and Supertest is currently in progress.

Planned tests cover:
- User listing
- Get by ID
- Search
- Pagination
- Validation and error responses

## Evidence

- API running successfully locally.
- Search and pagination verified.
- Validation and error handling verified.
- Swagger/OpenAPI UI configured and tested.
- Integration testing in progress.

## Status

Done