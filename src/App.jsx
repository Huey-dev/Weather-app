import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import dotenv from 'dotenv';
dotenv.config();
const App = () => {
  const handleonSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="App">
      <SearchBar onSearchChange={handleonSearchChange} />
      <CurrentWeather />
      <WeatherForecast />
    </div>
  );
};

export default App;
