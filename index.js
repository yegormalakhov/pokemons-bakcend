require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
// const pokemonsDB = require("./dbs/pokemonsDB");
const pokemonRoute = require("./routes/pokemons");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3008;

app.use("/pokemons", pokemonRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
