const express = require("express");
const cors = require("cors");
const app = express(); // Creates Express application
const os = require("os");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  // Defines GET route for root path
  res.send("successful new instance!! 🎉")
});

app.listen(3001, () => {
  // Starts server on port 3001
  console.log("Server is running on port 3001");
});
