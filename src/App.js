import React, { useState } from 'react';

import './App.css';
import CityForm from './components/CityForm'
import CityWeather from './components/CityWeather'

import {campusCities} from './data/cities'


const apiKey = 'secretToken'



function App() {

  let [cityInput, setCityInput] = useState('')
  let [weather, setWeather] = useState({})
  let [apiLoaded, setApiLoaded] = useState(false)

  const handleCity = (city) => {
    setCityInput(city)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        setApiLoaded(true)
      })

    setCityInput('')
  }

  const handleSelector = (e) => {
    console.log(e.target.value)
  }


  return (
    <div className="App">
      <h1>Wild Weather</h1>
      <CityForm
        handleSubmit={handleSubmit}
        handleCity={handleCity}
        cityInput={cityInput}
      />
      <h3>Campus cities</h3>
      <select onChange={(e) => handleSelector(e)}>
        <option disabled selected value>-- select a city --</option>
        {
          campusCities.map((city,index) => <option key={index}>{city}</option>)
        }
      </select>
      <button>get me that weather</button>
      {
        apiLoaded
          ? <CityWeather weather={weather} />
          : <h4>Write a city to see the weather there</h4>
      }

    </div>
  );
}

export default App;
