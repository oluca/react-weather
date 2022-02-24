import React from "react";
import {
    BrightnessHigh,
    CloudDrizzle, CloudHaze2,
    CloudLightningRain,
    CloudRain,
    Clouds,
    CloudSnow
} from 'react-bootstrap-icons';

export default function Icon({ condition }) {

    let icon

    // https://openweathermap.org/weather-conditions

    if (condition === 'Thunderstorm') {
        icon = <CloudLightningRain />
    }
    else if (condition === 'Drizzle') {
        icon = <CloudDrizzle />
    }
    else if (condition === 'Rain') {
        icon = <CloudRain />
    }
    else if (condition === 'Snow') {
        icon = <CloudSnow />
    }
    else if (condition === 'Clear') {
        icon = <BrightnessHigh />
    }
    else if (condition === 'Clouds') {
        icon = <Clouds />
    } else {
        icon = <CloudHaze2 />
    }

    return icon

}

