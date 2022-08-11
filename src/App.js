import logo from './logo.svg';
import './App.css';
import React,{ useEffect ,useState} from 'react';
import GlobalStats from './components/global';
import  CountriesStats from './components/countries';
import Search from './components/search';

function App() {

  const [globalSTats,setglobalStats] =useState ('')
  const [countriesSTats,setconutriesStats] =useState ([]);
  

  useEffect(()=>{

    let url ="https://api.covid19api.com/summary";

    fetch (url).then((response) =>response.json().then((data)=>{
      console.log(data);
      setglobalStats(data.Global)
      setconutriesStats(data.Countries)

    }))


  },[])



  const searchCountry = ((text) =>{
    let value= text.toLowerCase ();
    let result= [];
    result=countriesSTats.filter((countries) =>{
      return countries.Country.toLowerCase().indexOf(value)!==-1
    });
    setconutriesStats(result);

  })
  return (
    <div className="App">
      <GlobalStats global={globalSTats}/>
    <Search search={searchCountry}/>
      <CountriesStats countries={countriesSTats}/>
  
    </div>
  );
}

export default App;
