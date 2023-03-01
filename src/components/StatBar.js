import {useState} from 'react';
const StatBar = ({type, statValue}) =>{

const [value, setValue] = useState(0);

  setTimeout(() => {
    setValue(statValue/4)
  }, 100);



return(
  <div className={`stat-bar ${type}`} id={type} style={{width: `${value}vh`}}>
  </div>
  
)
  }

  export default StatBar;