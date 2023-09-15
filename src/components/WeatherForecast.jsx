import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="text-xl font-bold">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="bg-gray-200 rounded-lg p-2 m-2 cursor-pointer flex items-center">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="w-10 h-10"
                    alt="weather"
                  />
                  <label className="ml-2 text-lg font-semibold">
                    {forecastDays[idx]}
                  </label>
                  <label className="flex-grow text-right ml-auto">
                    {item.weather[0].description}
                  </label>
                  <label className="text-gray-500">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-2 gap-4 p-2">
                <div className="flex items-center">
                  <label className="font-semibold">Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="flex items-center">
                  <label className="font-semibold">Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="flex items-center">
                  <label className="font-semibold">Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="flex items-center">
                  <label className="font-semibold">Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="flex items-center">
                  <label className="font-semibold">Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="flex items-center">
                  <label className="font-semibold">Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
