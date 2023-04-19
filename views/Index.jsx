const React = require("react");

function Index({pokemon}) {
  const myStyle = {
    color: "#FFFFFF",
    backgroundColor: "#000000",
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <h1 style={myStyle}>See All The Pokemon</h1>
      <a href="/pokemon/new">Create New Pokemon</a>
      <ul>
        {pokemon.map((pokemon, i) => {
          return (
            <li key={pokemon._id}>
              <a href={`/pokemon/${pokemon._id}`}>{capitalizeFirstLetter(pokemon.name)}</a>
              <img src={pokemon.image + '.jpg'} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
