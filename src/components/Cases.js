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
        <p>{data.cases}</p>
        </div>
       <div className="col small-col">
        <h2>Today Cases</h2>
        <p>{data.todayCases}</p>
        </div>
        <div className="col small-col">
        <h2>Total Deaths</h2>
        <p>{data.deaths}</p>
         </div>
      </div>

  <div className="container">
       <div className="col small-col">
        <h2>Recovered</h2>
        <p>{data.recovered}</p>
        </div>
       <div className="col small-col">
        <h2>Active Cases</h2>
        <p>{data.active}</p>
        </div>
       <div className="col small-col">
        <h2>Total Cases</h2>
        <p>{data.cases}</p>
        </div>
  
    </div>
     <div className="container">
       <div className="col small-col">
        <h2>Cases per One Millon</h2>
        <p>{data.casesPerOneMillion}</p>
        </div>
       <div className="col small-col">
        <h2>Tests per One Million</h2>
        <p>{data.testsPerOneMillion}</p>
        </div>
       <div className="col small-col">
        <h2>Deaths per One Million</h2>
        <p>{data.deathsPerOneMillion}</p>
        </div>
      
    </div>
    
       <div>   
                <center className="footer">
                    <h1>Source : disease.sh</h1>
                </center>
            </div>
  </>
   )
}

export default Cases