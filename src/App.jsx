import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";

const App = () => {
  const handleonSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="max-w-screen-lg mx-auto my-5 px-4 sm:px-6 lg:px-8">
      <SearchBar onSearchChange={handleonSearchChange} />
      <CurrentWeather />
      <WeatherForecast />
    </div>
  );
};

export default App;
