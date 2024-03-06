const express = require("express");
const compression = require("compression");
const cors = require("cors");

const _port = process.env.PORT || 7070;
const _app_folder = __dirname + "/estaticos/dist/sources/apps/vdc-private-app";
// const _app_folder = __dirname;



const app = express();
app.use(compression());
app.use(cors());


//____________________________________________________________________________
// Middleware
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJQZWRybyIsImlhdCI6MTcwNDc5NTgwMywiZXhwIjoxNzA0Nzk1ODYzfQ.-rCPcI__9WyLLj6B1rHC0dFO5pcsv5rlQxhw9AYnj-M"
const token = ""
    
app.use((req, res, next) => {
  // Insertar el token en el header de cada respuesta
  res.setHeader("Authorization", `Bearer ${token}`);
  // Continuar con el siguiente middleware
  next();
});


//____________________________________________________________________________
// ---- SERVE STATIC FILES ---- //
app.get("*.*", express.static(_app_folder, { maxAge: 0 }));

// ---- SERVE APLICATION PATHS ---- //
app.all("*", function (req, res) {
  console.log("🚀");
  res.status(200).sendFile(`/`, { root: _app_folder });
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, () => {
  console.log(`Node server is running on http://localhost:${_port}`);
});