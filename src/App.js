import axios from "axios"
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const savePositionToState = (position) => {
    setX(position.coords.latitude);
    setY(position.coords.longitude);
  }

  const fetchWeather = async() => {
try{

  window.navigator.geolocation.getCurrentPosition(savePositionToState);
  const res = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Lublin&appid=1039cf2e872c4c85f955bf923ace09ea&units=metric"
    );
    console.log(res.data);

    const res1 = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=1039cf2e872c4c85f955bf923ace09ea&units=metric`
      );
      console.log(res1.data);
}catch(err)
{
  console.log(err);
}


  }
  useEffect(() => {
    fetchWeather();
  }, [])
  return (
    <div className="App">
      
       
    </div>
  );
}

export default App;
