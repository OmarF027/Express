const express = require("express");
const app = express();

// Importa i router
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

// Collega i router ai percorsi
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Errore interno del server");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});