import React from 'react';


const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
const CountryList = ({ name, setNewSearchTerm }) => (

    <p>{name}  <Button handleClick={() => setNewSearchTerm(name)} text="show" /></p>
  )

  export default CountryList