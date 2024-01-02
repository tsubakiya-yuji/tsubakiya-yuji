module.exports = {
	useTabs: true,
	singleQuote: true,
	plugins: [
		require.resolve('prettier-plugin-astro', 'prettier-plugin-tailwindcss'),
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
