/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["apod.nasa.gov", "www.youtube.com", "player.vimeo.com"],
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
