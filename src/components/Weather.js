import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Weather = ({ capital }) => {



    const [temperature, setTemperature] = useState('')
    const [imgWeatherLink, setImgWeatherLink] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [windDir, setWindDir] = useState('')
  
  
    
    useEffect(() => {
      let isSubscribed = true
      axios
        .get('http://api.weatherstack.com/current?access_key=daddd82881e973336c045473b2958833&query=' + capital)
        .then(response => {
          if(isSubscribed) {    
          setTemperature(response.data.current.temperature)
          setImgWeatherLink(response.data.current.weather_icons[0])
          setWindSpeed(response.data.current.wind_speed)
         setWindDir(response.data.current.wind_dir)
        }
       
        })
        return () => isSubscribed = false
    }, [capital])
  
    return (
      <>
  
        temperature: {temperature ? temperature : "unknown temperature"} Celsius <br></br>
        
          <img src={imgWeatherLink} alt="weather"/>
       <p> wind: {windSpeed ? windSpeed : "unknown wind speed"} kph direction {windDir ? windDir : "unknown wind direction"}</p>
      </>
    )
  
  }

  export default Weather