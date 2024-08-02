import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			screens: {
				msm: '685px',
				xs: '480px',
			},
			colors: {
				primary: '#ad1fea', // Purple
				secondary: '#4661e6', // Blue
				darkBlue: 'rgb(53,63,104)', // Dark Blue
				white: '#fff', // White
				lightGray: '#f2f4ff', // Light Gray
				veryLightGray: '#f7f8fd', // Very Light Gray
				darkGray: '#3a4374', // Dark Gray
				mediumGray: '#647196', // Medium Gray
				orange: '#f49f85', // Orange
				skyBlue: '#62bcfa', // Sky Blue
			},

			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
