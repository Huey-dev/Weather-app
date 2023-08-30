import React, {useState} from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import {geoApiOptions, GEO_API_URL} from '../api'

const SearchBar = ({onSearchChange}) => {

  const [search, setSearch] = useState(null)
  // searchData retrirves the data we enter into async Paginate
  const handleonChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  
  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleonChange}
    />
  )
}

export default SearchBar