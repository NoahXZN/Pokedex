let pokemonList (function()=
 let repository =[
  {name: 'Aron', height: 4, type: ['steel' , 'rock']},
  {name: 'Mudkip', height: 4, type: 'water'},
  {name: 'Bulbasaur', height: 7, type: ['grass' , 'poison']}
];

function getAll () {
  return repository;
}

function add(pokemon) {
  repository.push(pokemon);
}

function showDetails(pokemon){
  console.log(pokemon.name)
}

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
})

//Lets user know pokemon type and measurments
for (let i = 0;
  i < pokemonList.length; i++){
    if (pokemonList[i].height >= 7) {
      document.write(pokemonList[i].name + " is " + pokemonList[i].height + " meters tall and is " + pokemonList[i].type + " type. What a big pokemon!<br>")
    }
    else {
      document.write(pokemonList[i].name + " is " + pokemonList[i].height + " meters tall and is " + pokemonList[i].type + " type. Great catch!<br>")
    }
  }
