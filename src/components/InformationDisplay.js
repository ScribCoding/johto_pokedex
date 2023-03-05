import TypeDisplay from "./TypeDisplay";
import StatBar from "./StatBar";

const InformationDisplay = ({pickedPokemon}) =>{
    
        let name = pickedPokemon.name;
        let id = pickedPokemon.id;
        let types = pickedPokemon.types;
        let stats = pickedPokemon.stats
        let frontSpriteURL = pickedPokemon.frontURL;
        
        function displayStat(type){
            if(type =="bar"){
                if(stats!= undefined){
                    return(
                        stats.map((currentStat,index)=>{
                            return <StatBar key = {index} type={currentStat.stat.name} statValue={currentStat.base_stat}/>
                        }   
                        )
                    )
                }         
            }

            if(type =="label"){
                if(stats!= undefined){
                    return(
                        stats.map((currentStat,index)=>{
                            return <p key = {index} className="info-stats-label">{currentStat.stat.name}</p>
                        }   
                        )
                    )
                }
       
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
            <div className="info-stats" id="info-stats">
                <div className="info-stats-labels">
                    {displayStat("label")}
                </div>
                <div className="info-stats-bars">
                {displayStat("bar")}
                </div>
                
            </div>


        </div>

    </div>
)
}

export default InformationDisplay;