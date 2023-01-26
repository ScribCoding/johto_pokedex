import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons'
import Filter from './components/Filter'

const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

//------------------COMPONENTS------------//







function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
 



  async function pokemonGenerator(){
    const interval = {
      offset:151,
      limit: 100
    }
    try{
    console.log(pokemonList)
    const pokeList = await P.getPokemonsList(interval)
    
    setPokemonList(pokeList.results)
    }
    catch(err){
      console.log(err)
    }
    
  }
  useEffect(()=>{
    pokemonGenerator();
  },[]);

  const filter = (event) =>{
    setSearch(event.target.value);
  }



  return (
    <div className="App">
   
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
