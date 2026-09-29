const request = require("supertest");
const app = require("../src/app");

describe("M13 User API", () => {

  test("GET /api/users should return users", async () => {
    const response = await request(app)
      .get("/api/users");

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  test("GET /api/users/1 should return user", async () => {
    const response = await request(app)
      .get("/api/users/1");

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(1);
  });

  test("GET /api/users/100 should return 404", async () => {
    const response = await request(app)
      .get("/api/users/100");

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("User not found");
  });

  test("GET /api/users should support search", async () => {
    const response = await request(app)
      .get("/api/users?search=arun");

    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(1);
    expect(response.body.data[0].name).toBe("Arun");
  });

  test("GET /api/users should support pagination", async () => {
    const response = await request(app)
      .get("/api/users?page=1&limit=2");

    expect(response.statusCode).toBe(200);
    expect(response.body.page).toBe(1);
    expect(response.body.limit).toBe(2);
    expect(response.body.data.length).toBeLessThanOrEqual(2);
  });

  test("GET /api/users should reject invalid pagination", async () => {
    const response = await request(app)
      .get("/api/users?page=0&limit=2");

    expect(response.statusCode).toBe(400);
  });

});