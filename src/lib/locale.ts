export const getDirection = (locale: string): 'rtl' | 'ltr' => {
	const rtlLocales = [
		'ar', // Arabic
		'fa', // Persian (Farsi)
		'he', // Hebrew
		'ur', // Urdu
		'ps', // Pashto
		'ckb', // Kurdish (Sorani)
		'dv', // Dhivehi (Maldivian)
		'yi', // Yiddish
	];

	return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
};
