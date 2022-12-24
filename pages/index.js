import Head from "next/head";
import { getNasaLatestData } from "../apiService/apiCall";
import NasaDetails from "../components/NasaDetails";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Nasa Application</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta
					name='title'
					property='og:title'
					content={"Nasa | Developed by Sai Krishna "}
				/>
				<meta
					name='description'
					property='og:description'
					content="NASA.gov brings you the latest news, images and videos from America's space agency, pioneering the future in space exploration, scientific discovery and aeronautics research."
				/>
				<meta
					property='og:image'
					content='http://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png'
				/>
				<meta
					property='twitter:title'
					content='National Aeronautics and Space Administration'></meta>
				<meta
					property='twitter:description'
					content='Pioneering the future in space exploration, scientific discovery and aeronautics research.'></meta>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NasaDetails data={props.data} />
		</>
	);
}

export const getStaticProps = async () => {
	try {
		const response = await getNasaLatestData();

		return {
			props: {
				data: response.data,
			},
			revalidate: 86400,
		};
	} catch (error) {
		return { notFound: true };
	}
};
