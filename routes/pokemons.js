const express = require("express");
const pokemonRoute = express.Router();
const pokemonsDB = require("../dbs/pokemonsDB");

const pokemons = pokemonsDB.pokemons;
// console.log(pokemons);
pokemonRoute.get("/", (req, res) => {
  res.send(pokemons);
});

pokemonRoute.get("/:id", (req, res) => {
  const { id } = req.params;
  const targetPokemon = pokemons.find((pokemon) => pokemon.id == Number(id)); //Need to change string number to number
  console.log(targetPokemon);
  res.send(targetPokemon);
});

module.exports = pokemonRoute;
