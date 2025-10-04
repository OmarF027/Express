const express = require("express");
const path = require("node:path"); 
const app = express();

// EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Importa i router
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

// Collega i router ai percorsi
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Errore interno del server");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});