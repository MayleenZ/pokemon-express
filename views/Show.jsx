const React = require('react')

function Show({pokemon}){
    console.log(pokemon);
    return (
        <div>
            <a href='/pokemon'>All Pokemon</a>
            <h1>Gotta Catch 'Em All</h1>
            <h1>{pokemon.name}</h1>
            <img src = {pokemon.image + '.jpg'} />
        </div>
    )
}

module.exports = Show