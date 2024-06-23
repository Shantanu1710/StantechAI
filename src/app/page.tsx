'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Search from '@/components/Search';
import WeatherDisplay from '@/components/WeatherDisplay';
import Spinner from '@/components/Spinner';
import Header from '@/components/header';
import TopBanner from '@/components/Hero';
import Footer from '@/components/footer';

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const apiKey = 'bbadfebeca5686674c25489edc331c8e';

interface WeatherData {
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
}

function App() {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header/>
    
    <TopBanner/>
    <Footer/>
    
    {/* weather app */}
    <div className='max-lg:hidden'>

      <h1 className='font-poppins text-4xl font-bold text-secondary text-center p-12  '>Weather Dashboard</h1>
      <div className='flex justify-center '>

      <Search setCity={setCity} fetchWeather={fetchWeather} />
      </div>
      {loading && <Spinner />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
    </>
  );
}

export default App;
