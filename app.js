const express = require("express");
const app = express();

// Route base
app.get("/", (req, res) => res.send("Hello, world!"));

// Server in ascolto
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}`);
});