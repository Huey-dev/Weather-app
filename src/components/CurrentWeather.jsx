import React from 'react'

const CurrentWeather = () => {
  return (
    <div className='weather'>
      <div className="top">
        <p className="cityname">Belgrade</p>
        <p className="weather_description">Sunny</p>
      </div>
      <img src="icons/01d.png" alt="weather" className='waether_icon' />

    </div>
  )
}

export default CurrentWeather