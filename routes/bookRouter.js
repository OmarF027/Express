const { Router } = require("express");
const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("Tutti i libri"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Dettagli libro ID: ${bookId}`);
});
bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Prenotazione libro ID: ${bookId}`);
});
bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Prenotazione CONFERMATA per libro ID: ${bookId}`);
});

module.exports = bookRouter;