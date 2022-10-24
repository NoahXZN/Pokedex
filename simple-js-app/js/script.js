let pokemonRepository = (function() {
let repositoryList = [{
name: 'Aron',
height: 4,
type: ['steel', 'rock']
},
{
name: 'Mudkip',
height: 4,
type: 'water'
},
{
name: 'Bulbasaur',
height: 7,
type: ['grass', 'poison']
}
];

function getAll() {
return repositoryList;
}

function add(pokemon) {
repository.push(pokemon);
}

function showDetails(pokemon) {
console.log(pokemon.name)
}

function addListItem(pokemon){
let pokemonList = document.querySelector(".pokemon-list");
let listpokemon = document.createElement("li");
let button = document.createElement("button");
button.innerText = pokemon.name;
button.classList.add("button-class");
listpokemon.appendChild(button);
pokemonList.appendChild(listpokemon);
}

return {
getAll,
add,
showDetails,
addListItem,
}}());

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});
