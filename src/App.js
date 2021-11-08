import axios from "axios"
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast"
import './App.css';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weatherData, setWeatherData] = useState(0);
  const [weatherData2, setWeatherData2] = useState(0);
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
      const fiveday = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=1039cf2e872c4c85f955bf923ace09ea&units=metric`
        );
        setWeatherData2(fiveday.data);
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
      <CurrentWeather data={weatherData}/>
<Forecast data={weatherData2}/>
    </div>
  );
}

export default App;
