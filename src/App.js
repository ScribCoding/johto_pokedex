import { useEffect, useState } from 'react';
import './styles/stylesheets.css';
import Buttons from './components/Buttons'
import Filter from './components/Filter'
import InformationDisplay from './components/InformationDisplay';

import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

//------------------COMPONENTS------------//







function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonTestList, setPokemonTestList] = useState([]);
  const [pickedPokemon, setPickedPokemon] = useState({});
  const [search, setSearch] = useState("");
 
  async function pokemonGenerator(){
    const interval = {
      offset:151,
      limit: 100
    }


    await P.getPokemonsList(interval)
    .then(response =>{
      const pokeList = response;
      console.log("this is the list",pokeList);
      setPokemonList(pokeList.results) //sets entire pokemon list as an array
    })
    .then(
      setTimeout(() => {
        
        let pokemon_buttons = document.getElementsByClassName("pokemon-button");

        for (let i = 0; i<pokemon_buttons.length; i++){
          pokemon_buttons[i].id=i; //sets the id of the button to the index of the pokemon in the pokemon buttons list
          pokemon_buttons[i].style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${152+i}.svg')`;
        }
  }, 100)
    )
  }

  useEffect(()=>{
    pokemonGenerator();
  },[]);

  //controls whether a button is displayed or not
  useEffect(()=>{
    let pokemon_buttons = document.getElementsByClassName("pokemon-button");
    for(let i = 0; i<pokemon_buttons.length; i++){
        let pokemon_name = pokemonList[i].name.toLowerCase()
        let search_filter = search.toLowerCase();
        (pokemon_name.includes(search_filter)||(i+152) === Number(search_filter)) ? 
        pokemon_buttons[i].style.display = "block"
        : 
        pokemon_buttons[i].style.display = "none"
    }
  
  },[search])

  //button click to show display stats
  async function pokemonButtonClick(){
    let pokemon_buttons = document.getElementsByClassName("pokemon-button");
    for (let i = 0; i<pokemon_buttons.length; i++){
      //when button is clicked display the information display
      pokemon_buttons[i].addEventListener("click",(event)=>{
        const informationDisplay = document.getElementById("informationDisplay")
        informationDisplay.classList.add("info-show");
        document.getElementById("informationDisplayContainer").classList.add("infoDisplay-show");

        console.log(pokemonList[event.target.id]);

        async function getData(idNumber){
          await P.getResource([`/api/v2/pokemon/${idNumber}`])
            .then((response) => {
              console.log(response[0])
              console.log(response[0].name)
              console.log(response[0].types)
              console.log(response[0].stats)

              function getTypes(){
                let typeArray = [];
                response[0].types.forEach(element => {
                  typeArray.push(element.type.name);
                });
                return typeArray;
              }

              function getName(){
                return response[0].name
              }

              function getID(){
                return response[0].id
              }

              setPickedPokemon({
                name: getName(),
                id: getID(),
                types: getTypes(),
              })
            });
        }


        getData(i+152);
      })

      //when display is not clicked
      document.getElementById("informationDisplay").addEventListener("click",(event)=>{
        //if the clicked target is the info container inside, do not remove it
        if(document.getElementById("informationDisplayContainer").contains(event.target)){
          //clicked inside!
        }else{
          document.getElementById("informationDisplay").classList.remove("info-show");
          document.getElementById("informationDisplayContainer").classList.remove("infoDisplay-show");
          

          
          
          setPickedPokemon({});
        }
      }
    )}
  }

  useEffect(()=>{
    pokemonButtonClick();
   },[pokemonList])


  const filter = (event) =>{
    setSearch(event.target.value);
  }
  

 

  return (
    <div className="App">
    <InformationDisplay pickedPokemon ={pickedPokemon}/>
    <header className='header'>
      <div className='search-section'>
        <h2>Name or Number</h2>
        <form>
        <Filter array={pokemonList} function={filter} value={search}/> 
        </form>
      </div>
      <h1>Johto Pokedex</h1>
    </header>

    <main className='pokedex-container'>
    <Buttons array={pokemonList} searchValue ={search}/>

      
    </main>

    </div>
  );
}

export default App;
