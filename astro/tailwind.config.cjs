const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				courgette: ["Courgette"],
				inter: ["Inter"],
			},
			backgroundColor: {
				'background': "url(/public/background.jpg)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
