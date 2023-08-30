import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeatherForecast from './components/WeatherForecast'

const App = () => {
  return (
    <div className='App'>
      <SearchBar/>
      <CurrentWeather/>
      <WeatherForecast/>
    </div>
  )
}

export default App