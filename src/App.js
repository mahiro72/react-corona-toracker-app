import './App.css';
import TopPage from './pages/TopPage';

import { useState } from 'react';
import countriesJson from "./countries.json"

function App() {

  const [country,setCountry]=useState('');

  const [countryData,setCountryData] = useState({
    date:'',
    newConfirmed:'',
    totalConfirmed:'',
    totalDeaths:''
  });

  const getCountryData=()=>{
        fetch(`https://api.covid19api.com/country/${country}`).then((res)=>res.json())
        .then((data)=>
          setCountryData({
            date:data[data.length-1].Date,
            newConfirmed:data[data.length-1].Confirmed-data[data.length-2].Confirmed,
            totalConfirmed:data[data.length-1].Confirmed,
            totalDeaths:data[data.length-1].Deaths
          })

        )
  }
  console.log(countryData.date)

  return (
    <div>
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData} />
    </div>
  );
}

export default App;
