import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				padding: '2rem',
				center: true
			},
			fontFamily: {
				arizona: ['Arizona', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'semi-white': '#EDE7E8'
			}
		}
	},
	plugins: []
};
