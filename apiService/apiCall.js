import { NASA_API, NEXT_SERVER_API } from "./apiConfig";

export const getNasaLatestData = () => {
	return NASA_API.get(
		`/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7`
	);
};

export const getNasaApiData = (start_date, end_date) => {
	return NEXT_SERVER_API.get(
		`api/nasa?start_date=${start_date}&end_date=${end_date}`
	);
};
