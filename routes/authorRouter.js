const { Router } = require("express");
const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("Tutti gli autori"));
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Dettagli autore ID: ${authorId}`);
});

module.exports = authorRouter;