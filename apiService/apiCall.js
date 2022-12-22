import { NASA_API } from "./apiConfig";

export const getNasaLatestData = () => {
	return NASA_API.get(
		`/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7`
	);
};
