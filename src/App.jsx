import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import WeatherForecast from './components/WeatherForecast'

const App = () => {

  const handleonSearchChange = (searchData) => {
    console.loh(searchData)
  }

  return (
    <div className='App'>
      <SearchBar onSearchChange={handleonSearchChange}/>
      <CurrentWeather/>
      <WeatherForecast/>
    </div>
  )
}

export default App