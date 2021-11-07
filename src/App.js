import axios from "axios"
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherData] = useState(0);
  let savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  const fetchWeather = async() => {
try{

  window.navigator.geolocation.getCurrentPosition(savePositionToState);
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1039cf2e872c4c85f955bf923ace09ea&units=metric`
      );
      setWeatherData(res.data);
}catch(err)
{
  console.log(err);
}
  }

  useEffect(() => {
    fetchWeather();
  }, [latitude,longitude])

  return (
    <div className="App">
 {weatherData.main && weatherData.main.temp}<br></br>
 {weatherData.main && weatherData.main.feels_like}<br></br>
 {console.log(weatherData)}<br></br>
    </div>
  );
}

export default App;
