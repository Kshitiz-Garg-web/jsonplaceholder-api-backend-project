const express = require("express");
const userRoutes = require('./routes/userRoutes');
const { WELCOME_MSG } = require('./utils/constants');

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: WELCOME_MSG,
  });
});

app.use('/api/users', userRoutes);

app.use((req, res) => {
  res.status(404).json("404 found - wrong req ");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json("something went wrong in server");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running 🚀 on http://localhost:${PORT}`);
});
