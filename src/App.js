import React, { useState } from "react";
import './App.css';
import {apiKey} from "./config";
import {Search} from "react-bootstrap-icons";
import Weather from "./components/Weather";
import Container from "./components/Container";

function App() {

    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("dubai")

    const getWeather = () => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(
            response => response.json()
        ).then(
            data => {
                setWeatherData(data)
            }
        )
    }

    // https://openweathermap.org/weather-conditions

  return (
    <Container weatherData={weatherData}>
        <div className="
                        w-full h-screen
                       ">

            <header className="
                               text-white
                               flex flex-row justify-between items-center
                              ">

                <div className="
                                text-md
                                border-b-2 border-slate-400
                                flex flex-row items-center
                                w-1/2
                                m-2
                               ">

                    <input
                        className="

                           bg-transparent
                           p-1 mr-2
                           w-full
                           focus:outline-none
                          "
                        placeholder="Enter City..."
                        onChange={e => setCity(e.target.value)}
                        value={city}
                        /* onKeyPress={getWeather} */
                    />

                    <button
                        onClick={getWeather}
                        className="
                           px-4 py-2
                           hover:pointer
                          "
                    >
                        <Search />
                    </button>

                </div>

                <div className="p-2">
                    10:12
                </div>

            </header>

            <Weather weatherData={weatherData} />

        </div>

    </Container>
  )
};

export default App
