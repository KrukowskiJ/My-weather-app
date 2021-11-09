import React, { useEffect, useState } from 'react';


function CurrentWeather({data}) { 
  const src=`http://openweathermap.org/img/wn/${data.weather ? data.weather[0].icon: ""}@2x.png`

  return (
    <div className="container">
      <h1>Current weather in  <strong className="city_name">{data.name}</strong></h1>
      <h2>temperature: <strong class="temp_number">{data.main && data.main.temp}°C</strong></h2>
      <h2>feels like: <strong class="temp_number">{data.main && data.main.feels_like}°C</strong></h2>
      <h2>probably: <strong class="temp_number">{data.weather && data.weather[0].description}</strong></h2>
      <div class="weather-icon"><img src={src} /></div>
   </div>
  );
}

export default CurrentWeather;