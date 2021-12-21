const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

require("dotenv").config();
//const port = 3000;
const port = process.env.PORT || 3000;

//Conexion a base de datos

const mongoose = require("mongoose");

//url de la base de datos de mongodb
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xrlup.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("conectado a mongodb"))
  .catch((e) => console.log("error de conexión", e));

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//Rutas Web
app.use("/", require("./router/RutasWeb"));
app.use("/usuarios", require("./router/Usuarios"));

app.use((req, res, next) => {
  // res.status(404).send("Sorry cant find that!");
  //res.status(404).sendFile(__dirname + "/public/404.html");
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Error al cargar la pagina",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
