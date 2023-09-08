import React from "react";

const CurrentWeather = () => {
  return (
    <div className="w-72 rounded-md shadow-md bg-gray-800 text-white px-4 pt-4 pb-20 mt-20 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <p className="font-semibold text-xl leading-tight m-0 tracking-wider pl-2">
            Belgrade
          </p>
          <p className="font-normal text-base leading-tight ml-2 m-0">Sunny</p>
        </div>
        <img 
          src="icons/01d.png"
          alt="weather"
          className="w-16 h-16 " 
        />
      </div>
      
      <div className="px-4 pb-4 flex justify-between items-center">
        <p className="font-semibold text-5xl leading-tight m-0 mb-4">18°C</p>
        <div className="w-full pl-5">
          <div className="flex justify-between">
            <span className="text-left font-normal text-sm border-b border-white mb-2 py-1">Details</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-sm">Feels like</span>
            <span className="text-right font-semibold text-sm">
              °C
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-sm">Wind</span>
            <span className="text-right font-semibold text-sm">m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-sm">Humidity</span>
            <span className="text-right font-semibold text-sm">%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-sm">Pressure</span>
            <span className="text-right font-semibold text-sm">hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
