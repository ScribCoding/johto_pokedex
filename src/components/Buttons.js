const Buttons = (props) =>{

return(
  [...props.array].map((e,i)=>{
    return <button key={i} className='pokemon-button'></button>
  })
)
  }

  export default Buttons;