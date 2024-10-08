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
				arizona: ['Arizona', ...defaultTheme.fontFamily.sans],
				jakarta: ['Jakarta', ...defaultTheme.fontFamily.sans],
				'arizona-var': ['Arizona-Var', ...defaultTheme.fontFamily.sans],
				roman: ['Times New Roman', ...defaultTheme.fontFamily.serif]
			},
			colors: {
				'semi-white': '#EDE7E8',
				'white-54': 'rgba(255, 255, 255, 0.54)',
				error: '#FF3838',
				'primary-red': '#7A151E',
				'bg-disabled': 'rgba(87, 87, 87, 0.54)',
				'text-disabled': '#69585C',
				'primary-button': '#151515',
				'red-line': '#C40C23'
			},
			fontSize: {
				'4.5xl': '40px'
			}
		}
	},
	plugins: []
};
