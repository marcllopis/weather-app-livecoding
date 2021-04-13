import React from 'react';

const CityWeather = (props) => (
  <div>
    <h1>The weather in {props.weather.name}</h1>
    <h2>{props.weather.weather[0].description}</h2>
    <h3>{props.weather.main.temp}</h3>
  </div>
)

export default CityWeather;
