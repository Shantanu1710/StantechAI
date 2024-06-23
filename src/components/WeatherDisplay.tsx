import React from 'react';
interface WeatherDisplayProps {
  weatherData: {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
    };
  };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  return (
    <>
    <div className='flex justify-center'>

    <div className='flex flex-col items-start gap-4 font-poppins text-2xl font-semibold text-secondary p-10'>

      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
    </div>
    </>
  );
}

export default WeatherDisplay;
