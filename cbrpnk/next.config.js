/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Replace "images.domains" with "images.remotePatterns"
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
};

module.exports = nextConfig;
