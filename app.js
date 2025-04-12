const express = require("express");
const userRoutes = require("./routes/userRoutes");
const { WELCOME_MSG } = require("./utils/constants");
const { init_max_Id } = require("./controllers/userController");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: WELCOME_MSG,
    endpoints: {
      all_users: {
        path: "/api/users",
        method: "GET",
        description: "From this path we Get all users",
      },
      user_by_id: {
        path: "/api/users/:id",
        method: "GET",
        description: "From this path we Get single user by ID",
      },
    },
  });
});

app.use("/api/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "The requested resource was not found",
      suggestions: [
        "Check the URL for typos",
        "Visit / for available endpoints",
      ],
      path: req.originalUrl,
    },
  });
});

const PORT = 3000;
init_max_Id().then(() => {
  app.listen(PORT, () => {
    console.log("🚀 Server running at http://localhost:3000");
  });
});
