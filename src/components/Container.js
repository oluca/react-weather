import React from "react";

export default function Container(props) {

    let condition = props.weatherData

    if (condition.weather === undefined) {
        console.log("undefined!")
    } else {
        condition = condition.weather[0].main
    }


    let gradient

    // https://openweathermap.org/weather-conditions

    if (condition === 'Thunderstorm') {
        gradient = 'bg-gradient-to-t from-gray-900 via-gray-100 to-gray-900'
    }
    else if (condition === 'Drizzle') {
        gradient = 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'
    }
    else if (condition === 'Rain') {
        gradient = 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'
    }
    else if (condition === 'Snow') {
        gradient = 'bg-gradient-to-r from-red-100 to-indigo-100'
    }
    else if (condition === 'Clear') {
        gradient = 'bg-gradient-to-b from-blue-400 to-blue-200'
    }
    else if (condition === 'Clouds') {
        gradient = 'bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'
    } else {
        gradient = 'bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'
    }

    console.log(gradient)

    return (
        <>
            <main className={`w-full h-screen
                             flex items-center justify-center flex-col 
                             ${gradient}`}>
                {props.children}
            </main>
        </>
    )

}

