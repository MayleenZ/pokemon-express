const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {type: String},
    image: {type: String}
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon