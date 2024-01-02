/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#87000C',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/images/hero/hero-pattern.svg')",
				'policy-pattern': 'linear-gradient(#fff,transparent 31%)',
				'policy-pattern02': 'linear-gradient(0deg, #87000C, transparent 25%)',
				'policy-bg':
					'repeating-linear-gradient(135deg, transparent, transparent 5px, rgba(255, 243, 224, 1) 5px, rgba(255, 243, 224, 1) 10px )',
			},
			fontFamily: {
				body: ['Arial', 'sans-serif'],
				rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
			},
			maxWidth: {
				container: '988px',
			},
			gridTemplateColumns: {
				policy: '1fr 1fr',
				profile: '1fr 0.75fr',
			},
		},
	},
	plugins: [],
};
