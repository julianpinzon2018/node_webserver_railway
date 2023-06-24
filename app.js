const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Handlebars
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Todo: require("hbs")
app.set("view engine", "hbs");
//Servir contenido estico
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Julian Pinzón",
    titulo: "Curso de node",
  });
});
app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Julian Pinzón",
    titulo: "Curso de node",
  });
});
app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Julian Pinzón",
    titulo: "Curso de node",
  });
});
// app.get("/generic", function (req, res) {
//   res.sendFile(__dirname + "/public/back/template/generic.html");
// });
// app.get("/elements", function (req, res) {
//   res.sendFile(__dirname + "/public/back/template/elements.html");
// });
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/back/404.html");
});

console.clear();
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto", "http://localhost:" + port);
});
