

const InformationDisplay = ({pickedPokemon}) =>{
    
    let pokemon = pickedPokemon


   
        
return(
    <div className="info-hidden" id="informationDisplay"> 
    
        <div className="infoDisplay-hidden" id="informationDisplayContainer">
        <img/>
        <div className="info">
        <p >NAME:{pokemon.name}</p>
        <p >ID:{pokemon.id} </p>
        <p >TYPE:{pokemon.types} </p>
        </div>

        <div className="stats">


        </div>
        </div>

    </div>
)
}

export default InformationDisplay;