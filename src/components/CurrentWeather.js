import React, { useEffect, useState } from 'react';


function CurrentWeather({data}) {


  return (
    <>
      <h1>Current weather in  {data.name}</h1>
      {data.main && data.main.temp}<br></br>
 {data.main && data.main.feels_like}<br></br>
   </>
  );
}

export default CurrentWeather;