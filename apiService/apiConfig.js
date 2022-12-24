import axios from "axios";

export const NASA_API = axios.create({
	baseURL: process.env.SERVER_URL,
});

export const NEXT_SERVER_API = axios.create({
	baseURL: "/",
});
