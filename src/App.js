import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'



const App = () => {

  const [searchTerm, setNewSearchTerm] = useState('')
  const [countries, setCountries] = useState([])



  const handleSearchTermChange = (event) => {

    setNewSearchTerm(event.target.value)
    if (event.target.value === "") {
      return;
    }
  }

  useEffect(() => {

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)

      })
  }, [])

  const countriesToShow =
    countries.filter(country => country.name.toUpperCase().includes(searchTerm.toUpperCase()))



  const show = () => {

    if (searchTerm === '') {
      return <></>
    }
    if (countriesToShow.length === 1) {

      return <CountryDetails
        name={countriesToShow[0].name}
        capital={countriesToShow[0].capital}
        population={countriesToShow[0].population}
        languages={countriesToShow[0].languages}
        flag={countriesToShow[0].flag}
      />
    }

    if (countriesToShow.length >= 10) {
      return <><br></br>too many matches, specify another filter</>
    }
    return countriesToShow.map(country =>
      <CountryList
        key={country.name}
        name={country.name}
        setNewSearchTerm={setNewSearchTerm}

      />)
  }


  return (
    <div>
      <Filter termSearch={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      {show()}


    </div>
  );
}

export default App;
