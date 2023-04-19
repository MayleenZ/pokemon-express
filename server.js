require("dotenv").config()
const express = require('express')
const app = express()
const pokemon = require('./models/pokemon')
const Pokemon = require('./models/PokemonDB')
const connectToDB = require('./config/db')
const mongoose = require('mongoose')

PORT = 3000

//View engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//Middleware
app.use(express.urlencoded({ extended: false }));

app.get('/pokemon', (req,res) => {
    // res.render('Index', {pokemon})
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon})
    })
})

app.get('/pokemon/new', (req,res) => {
    res.render('New')
})

app.post('/pokemon', (req,res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
        res.redirect('/pokemon')
    })
})


app.get('/pokemon/:id', (req,res) => {
    // res.render('Show', {pokemon: pokemon[req.params.id]})
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon})
    })
})

app.listen(PORT, ()=> {
    console.log('Server is up');
    connectToDB();
})