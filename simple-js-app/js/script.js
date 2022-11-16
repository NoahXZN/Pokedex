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


  var pokemonRepository = (function() {
var repositoryList = [];
var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

function add(pokemon) {
repositoryList.push(pokemon);
}

function getAll() {
return repositoryList;
}

function addListItem(pokemon) {
var $ulItem = document.querySelector(".pokemon-list");
var $listItem = document.createElement("li");
var $button = document.createElement("button");

$button.innerText = pokemon.name;
$button.classList.add("pokemon-button");
$listItem.appendChild($button);
$ulItem.appendChild($listItem);
addEventListenerButton($button, pokemon);
}

function showDetails(pokemon) {
loadDetails(pokemon).then(function() {
showModal(pokemon);
});
}

function addEventListenerButton(button, pokemon) {
button.addEventListener("click", function(event) {
showDetails(pokemon);
});
}

function loadList() {
return fetch(apiUrl)
.then(function(response) {
return response.json();
})
.then(function(json) {
json.results.forEach(function(item) {
var pokemon = {
name: item.name,
url: item.url
};
add(pokemon);
});
})
.catch(function(e) {
console.error(e);
});
}

function loadDetails(item) {
var url = item.url;
return fetch(url)
.then(function(response) {
return response.json();
})
.then(function(json) {
item.imageUrl = json.sprites.front_default;
item.height = json.height;
item.types = Object.keys(json.types);
});
}

function showModal(details) {
var $modalContainer = document.querySelector("#modal-container");
$modalContainer.innerHTML = "";

var modal = document.createElement("div");
modal.classList.add("modal");

var closeButton = document.createElement("button");
closeButton.classList.add("modal-close");
closeButton.innerText = "X";
closeButton.addEventListener("click", hideModal);

var titleContent = document.createElement("h1");
titleContent.innerText = details.name;

var content = document.createElement("p");
content.innerText = "Height: " + details.height;

var img = document.createElement("img");
img.src = details.imageUrl;
img.classList.add("pokemon-image");

modal.appendChild(closeButton);
modal.appendChild(titleContent);
modal.appendChild(img);
modal.appendChild(content);
$modalContainer.appendChild(modal);

$modalContainer.classList.add("is-visible");

window.addEventListener("keydown", e => {
var $modalContainer = document.querySelector("#modal-container");
if (
e.key === "Escape" &&
$modalContainer.classList.contains("is-visible")
) {
hideModal();
}
});

$modalContainer.addEventListener("click", e => {
var target = e.target;
if (target === $modalContainer) {
hideModal();
}
});
}

function hideModal() {
var $modalContainer = document.querySelector("#modal-container");
$modalContainer.classList.remove("is-visible");
}

return {
add: add,
getAll: getAll,
addListItem: addListItem,
loadList: loadList,
loadDetails: loadDetails,
showModal: showModal
};
})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
});
});

// show the modal content and then make empty
function showModal(item) {
let modalBody = $(".modal-body");
let modalTitle = $(".modal-title");
let modalHeader = $(".modal-header");
let $modalContainer = $("#modal-container");

modalHeader.empty();
modalTitle.empty();
modalBody.empty();

//creating element for name in modal content
let nameElement = $("<h1>" + item.name + "</h1>");
// // creating img in modal content
let imageElementFront = $('<img class="modal-img" style="width:50%">');
imageElementFront.attr("src", item.imageUrlFront);
let imageElementBack = $('<img class="modal-img" style="width:50%">');
imageElementBack.attr("src", item.imageUrlBack);
// //creating element for height in modal content
let heightElement = $("<p>" + "height : " + item.height + "</p>");
// //creating element for weight in modal content
let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
// //creating element for type in modal content
let typesElement = $("<p>" + "types : " + item.types + "</p>");
// //creating element for abilities in modal content
let abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");

modalTitle.append(nameElement);
modalBody.append(imageElementFront);
modalBody.append(imageElementBack);
modalBody.append(heightElement);
modalBody.append(weightElement);
modalBody.append(typesElement);
modalBody.append(abilitiesElement);
}

//modal
function showModal(pokemon) {
let modalBody = $(".modal-body");
let modalTitle = $(".modal-title");

modalTitle.empty();
modalBody.empty();

let titleElement = $("<h1>" + pokemon.name + "</h1>");
let imageElement = $('<img class="modal-img">');
imageElement.attr("src", pokemon.imageUrl);
let contentElement = $("<p>" + "Height: " + pokemon.height + "</p>");
let typesElement = $("<p>" + "Type: " + pokemon.types + "</p>");
let abilityElement = $("<p>" + "Ability: " + pokemon.abilities + "</p>");

modalTitle.append(titleElement);
modalBody.append(imageElement);
modalBody.append(contentElement);
modalBody.append(typesElement);
modalBody.append(abilityElement);
}
