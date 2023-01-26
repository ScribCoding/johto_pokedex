const Buttons = (props) =>{
    
    let filteredArray = [...props.array].filter((e,i)=>{
        const filterValue = (props.searchValue).toLowerCase();
        const pokemonName = e.name.toLowerCase();
        const pokemonID = String(i+1);
        console.log("the index is: ", (typeof pokemonID), "the filter value is: ", (typeof filterValue));
        return (pokemonName.includes(filterValue)||pokemonID === filterValue) ;
    })


    return(
    [...filteredArray].map((e,i)=>{
      return <button key={i} className='pokemon-button'>{e.name}</button>
 })
    )
  }

  export default Buttons;