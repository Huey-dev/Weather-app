import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";
import axios from "axios";

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  // api for searching cities, we use the input value to serch the cities
  const loadOptions = async (inputValue) => {
    try {
      const response = await axios.get(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const options = response.data.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      }));

      return {
        options,
      };
    } catch (error) {
      console.error(error);
      return {
        options: [],
      };
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default SearchBar;
