const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index"); // Renderizza il template EJS
});

indexRouter.get("/about", (req, res) => res.send("Pagina About"));
indexRouter.get("/contact", (req, res) => res.send("Pagina Contatti"));

module.exports = indexRouter;