const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Homepage - Benvenuto!"));
indexRouter.get("/about", (req, res) => res.send("Pagina About"));
indexRouter.get("/contact", (req, res) => res.send("Pagina Contatti"));
indexRouter.post("/contact", (req, res) => res.send("Form contatti inviato!"));

module.exports = indexRouter;