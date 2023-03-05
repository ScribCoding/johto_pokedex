import {useState} from 'react';
const StatBar = ({type, statValue}) =>{

const [value, setValue] = useState(0);

const infoStats = document.getElementById("info-stats")
let infoStatsWidth = infoStats.offsetWidth

  setTimeout(() => {
    setValue(statValue/infoStatsWidth*250)
  }, 100);


return(
  <div className={`stat-bar ${type}`} id={type} style={{width: `${value}%`}}>
    <p className='stat-bar-value'>{statValue}</p>
  </div>
  
)
  }

  export default StatBar;