/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				headerBg: "#FFF8F5",
				primary: "#28221e",
				secondary: "#9e624c",
				navlinks: "#f2ebe5",
				secondaryBtn: "#534e4b",
				adsBar: "#F2E5DA",
				adsLogo: "#79736d",
				catBorder: "#E9E9E8",
				disabledText: "#9B9895",
				darkFooter: "#1A1613",
			},
		},
	},
	plugins: [],
};
