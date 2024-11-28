/** @type {import('tailwindcss').Config} */
module.exports = {
	// Включение темной темы
	darkMode: ["class"],

	// Указание путей для скарирования классов tailwind
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	// Глобальный префикс для классов tailwind
	prefix: "",

	theme: {
		// Настройка контейнера
		container: {
			center: true, // Центрирование по горизонтали
			padding: "16px", // Отступы внутри контейнера
		},

		// Определение экранных разверов
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px"
		},

		// Добавление шрифтов
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},

		extend: {
			// Определение цветов
			colors: {
				primary: "#202023",
				accent: {
					DEFAULT: "#88ccca",
					hover: "#7fb5b5",
				},
				// Эффект размытие
				backdropBlur: {
					sm: '4px',
					lg: '16px',
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};