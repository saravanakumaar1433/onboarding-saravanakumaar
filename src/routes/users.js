const express = require("express");

const router = express.Router();


const users = [
  {
    id: 1,
    name: "Arun",
    email: "arun@example.com"
  },
  {
    id: 2,
    name: "Kumar",
    email: "kumar@example.com"
  },
  {
    id: 3,
    name: "Raj",
    email: "raj@example.com"
  },
  {
    id: 4,
    name: "Priya",
    email: "priya@example.com"
  },
  {
    id: 5,
    name: "John",
    email: "john@example.com"
  }
]; 

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Arun
 *         email:
 *           type: string
 *           example: arun@example.com
 *
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get, search and paginate users
 *     description: Returns users with optional search and pagination.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: search
 *         required: false
 *         schema:
 *           type: string
 *         description: Search users by name or email
 *
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 5
 *         description: Number of users per page
 *
 *     responses:
 *       200:
 *         description: Users returned successfully
 *       400:
 *         description: Invalid pagination parameters
 */

/**
 * GET /api/users
 *
 * Examples:
 *
 * /api/users
 * /api/users?search=arun
 * /api/users?page=1&limit=2
 * /api/users?search=example.com&page=1&limit=3
 */

router.get("/", (req, res) => {
  const search = String(req.query.search || "")
    .trim()
    .toLowerCase();

  const page = Number.parseInt(req.query.page || "1", 10);
  const limit = Number.parseInt(req.query.limit || "5", 10);

  // Validate pagination parameters
  if (
    Number.isNaN(page) ||
    Number.isNaN(limit) ||
    page < 1 ||
    limit < 1 ||
    limit > 100
  ) {
    return res.status(400).json({
      error:
        "Invalid pagination parameters. Page must be >= 1 and limit must be between 1 and 100."
    });
  }

  let filteredUsers = [...users];

  // Search by name or email
  if (search) {
    filteredUsers = filteredUsers.filter((user) => {
      const name = user.name.toLowerCase();
      const email = user.email.toLowerCase();

      return name.includes(search) || email.includes(search);
    });
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedUsers = filteredUsers.slice(
    startIndex,
    endIndex
  );

  const total = filteredUsers.length;
  const totalPages =
    total === 0 ? 0 : Math.ceil(total / limit);

  return res.status(200).json({
    page,
    limit,
    total,
    totalPages,
    data: paginatedUsers
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Returns a single user using the supplied ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: User ID
 *
 *     responses:
 *       200:
 *         description: User returned successfully
 *       400:
 *         description: Invalid user ID
 *       404:
 *         description: User not found
 */

/**
 * GET /api/users/:id
 *
 * Example:
 *
 * /api/users/1
 */
router.get("/:id", (req, res) => {
  const id = Number.parseInt(req.params.id, 10);

  if (Number.isNaN(id) || id < 1) {
    return res.status(400).json({
      error: "Invalid user id"
    });
  }

  const user = users.find(
    (existingUser) => existingUser.id === id
  );

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  return res.status(200).json(user);
});

module.exports = router;