let response = fetch("https://pokeapi.co/api/v2/pokemon/xurkitree/")
  .then((response) => response.json())
  .then((result) => {
    let items = result
    console.log(items.name)
    console.log(items.weight)
    console.log(items.abilities)
  }).catch((error) => {
    console.log(error)
  })

  async function catGifs() {
    let response = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif")
    let data = response.url;
    console.log(data)
}

catGifs()

//Async / Await version of pokemonAPI, this is much easier
//async function apiPokemon() {
  //let response = await fetch("https://pokeapi.co/api/v2/pokemon/xurkitree/");

  //let data = await response.json();
    
  //console.log(data.name)
  //console.log(data.weight)
  //console.log(data.abilities)
//}

//apiPokemon()


