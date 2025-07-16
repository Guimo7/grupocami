import { heroui } from "@heroui/theme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/config/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	safelist: [
		"bg-orange-100",
		"text-orange-600",
		"bg-purple-100",
		"text-purple-600",
		"bg-indigo-100",
		"text-indigo-600",
		"bg-blue-100",
		"text-blue-600",
		"bg-green-100",
		"text-green-600",
		"bg-primary/10",
		"hover:bg-primary/10",
		"hover:text-primary",
		"backdrop-blur-sm",
		"bg-white/95",
	],
	theme: {
		extend: {
			fontFamily: {
				nando: ["Nando", "sans-serif"],
			},
		},
	},
	darkMode: "class",
	plugins: [
		heroui({
			themes: {
				light: {
					colors: {
						primary: {
							100: "#D0EBF8",
							200: "#A4D4F1",
							300: "#6FABD6",
							400: "#457CAD",
							500: "#184677",
							600: "#113666",
							700: "#0C2855",
							800: "#071C45",
							900: "#041339",
							DEFAULT: "#184677",
						},
						secondary: {
							100: "#E6FAE0",
							200: "#CAF6C3",
							300: "#A1E59E",
							400: "#7CCC80",
							500: "#52AA5E",
							600: "#3B924F",
							700: "#297A43",
							800: "#1A6238",
							900: "#0F5131",
							DEFAULT: "#52AA5E",
						},
						white: { DEFAULT: "#F5F5F5" },
					},
				},
			},
		}),
	],
};
