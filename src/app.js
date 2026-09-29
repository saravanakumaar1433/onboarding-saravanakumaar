const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "M13 User API",
      version: "1.0.0",
      description:
        "Node.js REST API demonstrating search, pagination, validation and OpenAPI."
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({
    application: "M13 Web API",
    status: "running"
  });
});

app.use("/api/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`M13 API running on http://localhost:${PORT}`);
    console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
  });
}

module.exports = app;