import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import axios from "axios";


const App = () => {
  const [currentWeather, setCurrentWeather] = useState(() => {
    const storedCityName = localStorage.getItem("cityName");
    return storedCityName ? { city: storedCityName } : null;
  });
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

        // Save data to local storage
        localStorage.setItem("currentWeather", JSON.stringify(weatherResponse));
        localStorage.setItem("forecast", JSON.stringify(forecastResponse));
        localStorage.setItem("cityName", searchData.label)
      })

      .catch(console.log);
  };

    // Load data from local storage when the app initializes
    useEffect(() => {
      // Check if data exists in local storage
      const storedCurrentWeather = localStorage.getItem("currentWeather");
      const storedForecast = localStorage.getItem("forecast");
      const storedCityName = localStorage.getItem("cityName")
      console.log("Stored City Name:", storedCityName);
      if (storedCityName) {
        setCurrentWeather((prevData) => ({
          ...prevData,
          city: storedCityName, // Set the city name from local storage
        }));
      }
      
  
      if (storedCurrentWeather && storedForecast) {
        // Parse the JSON data from local storage and set it in state
        setCurrentWeather(JSON.parse(storedCurrentWeather));
        setForecast(JSON.parse(storedForecast));
      }
    }, []);

  return (
    <div className="max-w-screen-lg mx-auto my-5 px-4 sm:px-6 lg:px-8">
      <SearchBar onSearchChange={handleonSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <WeatherForecast data={forecast} />}
    </div>
  );
};

export default App;
