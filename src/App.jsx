import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import axios from "axios";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleonSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = axios.get(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = axios.get(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // promise all to fetch both api for weather forecast and geo location
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].data;
        const forecastResponse = await res[1].data;

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });

        console.log("Weather Data:", weatherResponse);
      })

      .catch(console.log);
  };

  return (
    <div className="max-w-screen-lg mx-auto my-5 px-4 sm:px-6 lg:px-8">
      <SearchBar onSearchChange={handleonSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      <WeatherForecast />
    </div>
  );
};

export default App;
