import logo from './logo.svg';
import './App.css';
import React,{ useEffect ,useState} from 'react';
import GlobalStats from './components/global';

function App() {

  const [globalSTats,setGlobalStats] =useState ('')

  useEffect(()=>{

    let url ="https://api.covid19api.com/summary";
    fetch(url).then((response)=> response.json().then((data)=>{
      console.log(data);
      setGlobalStats(data.global)
    }))


  },[])
  return (
    <div className="App">
      <GlobalStats global={globalSTats}/>
  
    </div>
  );
}

export default App;
