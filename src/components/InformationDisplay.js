import TypeDisplay from "./TypeDisplay";

const InformationDisplay = ({pickedPokemon}) =>{
    
    let pokemon = pickedPokemon

   
        
return(
    <div className="info-hidden" id="informationDisplay"> 
    
        <div className="infoDisplay-hidden" id="informationDisplayContainer">
        <img/>
        <div className="info-general">
        <p >NAME: {pokemon.name}</p>
        <p >ID: {pokemon.id} </p>
        <TypeDisplay types={pokemon.types}/>
        </div>

        <div className="info-stats">


        </div>
        </div>

    </div>
)
}

export default InformationDisplay;