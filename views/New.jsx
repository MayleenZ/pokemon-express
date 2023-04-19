const React = require('react')

function New(){
    return (
        <div>
            <a href='/pokemon'>All Pokemon</a>
            <form action = '/pokemon' method = 'POST'>
            Name: <input type = "text" name="name"/>
            Image URL: <input type="text" name = "image"/>
            <input type="submit" value = "Submit"/>
            </form>
        </div>
    )
}

module.exports = New