import TypeDisplay from "./TypeDisplay";
import StatBar from "./StatBar";

const InformationDisplay = ({pickedPokemon}) =>{
    
        let name = pickedPokemon.name;
        let id = pickedPokemon.id;
        let types = pickedPokemon.types;
        let stats = pickedPokemon.stats
        let frontSpriteURL = pickedPokemon.frontURL;
        
        function displayStat(){
            if(stats!= undefined){
                return(
                    stats.map((currentStat,index)=>{
                        return <StatBar key = {index} type={currentStat.stat.name} statValue={currentStat.base_stat}/>
                    }   
                    )
                )
            }
            
        }
        

        
return(
    <div className="info-hidden" id="informationDisplay"> 
    
        <div className="infoDisplay-hidden" id="informationDisplayContainer">

            <div id="loading" className="hidden-loading">
                
            </div>

            <div className="info-image">
                <img className="frontSprite" src={frontSpriteURL}/>
            </div>
            

            <div className="info-general">
                <p >{name}</p>
                <p >{id} </p>
                <TypeDisplay types={types}/>
            </div>

            <div className="info-stats">
                {displayStat()}

            </div>
        </div>

    </div>
)
}

export default InformationDisplay;