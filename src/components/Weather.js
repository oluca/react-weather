import React from "react";
import Icon from "./Icon";

export default function Weather({ weatherData }) {
    return (
        <>
            {typeof weatherData.main === 'undefined' ? (
                <>
                    <div>
                        <p className="text-gray-100 text-center">
                            Welcome to weather app! Enter a City
                        </p>
                    </div>
                </>

            ): (
                <>
                    <div className="
                                w-full h-2/5
                                flex flex-col items-center justify-center
                                space-y-3
                               ">

                        <div className="text-gray-400 flex flex-row">
                            <p className="text-white">
                                {Math.round(weatherData.main.temp_max)}°
                            </p>
                            <span className="px-2">/</span>
                            <p className="text-gray-200">
                                {Math.round(weatherData.main.temp_min)}°
                            </p>
                        </div>
                        <div className="text-5xl text-white font-bold">
                            <h1>{Math.round(weatherData.main.temp)}°</h1>
                        </div>
                        <div className="text-white flex flex-row items-center text-xl">
                            <Icon condition={weatherData.weather[0].main} />
                            <p className="pl-2">{weatherData.weather[0].main}</p>
                        </div>

                    </div>
                    <div className="text-gray-100">


                    </div>
                </>

            )}
        </>

    )
}