import axios from "axios";
export const geoApiOptions = {
	ignoreBrowserTokenWarning: true,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_TOKEN,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
		
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

