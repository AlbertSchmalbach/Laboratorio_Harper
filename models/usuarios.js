const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre: String,
  correo: String,
  rol: String,
});

// Crear el modelo
const Mascota = mongoose.model("Mascota", mascotaSchema);

module.exports = Mascota;
