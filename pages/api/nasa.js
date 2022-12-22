import axios from "axios";

async function handler(req, res) {
	switch (req.query.api) {
		case "weekData":
			return getLastWeekData(req, res);
		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}

async function getLastWeekData(req, res) {
	// console.log("REW", req.query);
	try {
		const resp = await axios.get(
			`${process.env.SERVER_URL}
			/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${req.query.start_date}&end_date=${req.query.end_date}&thumbs=true`
		);
		res.status(200).json(resp.data);
	} catch (error) {
		res.status(500).json("ERRT", error);
	}
	res.end();
}

export default handler;
