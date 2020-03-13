import React from 'react';
import Weather from './Weather'
const Language = ({ name }) => (
    <li>{name}</li>
  )
  

const CountryDetails = ({ name, capital, population, languages, flag }) => {



    return (
      <>
        <h1>{name}</h1>
  
        capital {capital} <br></br>
        population {population}<br></br>
  
        <h2>languages</h2>
        <ul>
          {
            languages.map((language) => {
              return <Language key={language.name} name={language.name} />
            }
            )}
          <br></br>
          <img src={flag} width="300" height="200" alt="flag"></img>
  
        </ul>
  
        <h2>Weather in {capital}</h2>
        <Weather capital={capital}/>
  
  
      </>
    )
  }

  export default CountryDetails