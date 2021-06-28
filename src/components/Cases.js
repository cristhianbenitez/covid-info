import React, { useEffect, useState } from "react"
import './Cases.css'


const Cases = ( )=>  {
    const [data, setData] = useState([])

   const getData = async() => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await response.json();
    setData(data)
    console.log(data);
   }

   useEffect( ()=>{
    getData();
   }, []);

 return ( 
  <>
<div className="container">
       <div className="col small-col">
        <h2>Total Cases</h2>
        <p>Number of Cases</p>
        </div>
       <div className="col small-col">
        <h2>Today Cases</h2>
        <p>number of cases</p>
        </div>
        <div className="col small-col">
        <h2>Total Deaths</h2>
        <p>number of deaths</p>
         </div>
   </div>

  <div className="container">
       <div className="col small-col">
        <h2>Recovered</h2>
        <p>total of Recovered</p>
        </div>
       <div className="col small-col">
        <h2>Active Cases</h2>
        <p>active cases</p>
        </div>
       <div className="col small-col">
        <h2>Total Cases</h2>
        <p>total number of cases</p>
        </div>
  
  </div>
  </>
   )
}

export default Cases