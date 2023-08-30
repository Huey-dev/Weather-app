import React, {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import {geoApiOptions, GEO_API_URL} from '../api'

const SearchBar = () => {
  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
    />
  )
}

export default SearchBar