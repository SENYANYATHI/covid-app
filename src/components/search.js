

function Search (props){
    const textfield = {
        width:"1400px",
        height:"30px",
        marginTop:"3%",
        marginLeft:"10%"
    }

    const searchCountry=((e) =>{
      props.search(e.target.value) 
      props.search(e) 
    })
    return(

        <div>
            <input type="text" placeholder="Search a country" style={textfield} onChange= {(e)=>searchCountry(e)}/>

        </div>
    )
}
export default Search;