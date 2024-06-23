'use client'
import React, { useState } from 'react';

interface SearchProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  fetchWeather: (city: string) => void;
}

const Search: React.FC<SearchProps> = ({ setCity, fetchWeather }) => {
  const [input, setInput] = useState<string>('');
  const handleSearch = () => {
    setCity(input);
    fetchWeather(input);
  };

  return (
    <>
      <input className='font-poppins border-2 border-secondary px-4 py-2 rounded-3xl  mr-4 outline-blue-400'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      <button className='text-white bg-secondary px-5 py-2  rounded-3xl' onClick={handleSearch}>Search</button>
    </>
  );
}

export default Search;
