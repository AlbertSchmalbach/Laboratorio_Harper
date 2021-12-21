const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "Mi titulo dinamico" });
});

router.get("/servicios", (req, res) => {
  res.render("servicios", { tituloServicios: "Servicios" });
});

//Creando ruta CONTACTO
router.get("/contacto", (req, res) => {
  res.render("contacto", { tituloContacto: "Contactenos" });
});

module.exports = router;
