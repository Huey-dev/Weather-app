import axios from "axios";
export const geoApiOptions = {

	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_TOKEN,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
		ignoreBrowserTokenWarning: true,
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

