import React, { useState } from "react";
import './App.css';
import {apiKey} from "./config";

function App() {

    console.log(`KEY: ${apiKey}`)

  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(
          response => response.json()
      ).then(
          data => {
            setWeatherData(data)
          }
      )
    }
  }

  return (
    <div className="container bg-black">
        <input
            className="input"
            placeholder="Enter City..."
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
        />

        {typeof weatherData.main === 'undefined' ? (
            <div>
                <p>Welcome to weather app! Enter a City</p>
            </div>
        ): (
            <div>
                <p>{weatherData.name}</p>
                <p>{Math.round(weatherData.main.temp)}°C</p>
                <p>{weatherData.weather[0].main}</p>
            </div>
        )}

    </div>
  )
};

export default App
