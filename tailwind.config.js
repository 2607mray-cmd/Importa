/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                tea: {
                    50: '#fcfdf5',
                    100: '#f7fae6',
                    200: '#ebf4c5',
                    300: '#daea9a',
                    400: '#c1dd66',
                    500: '#a5c83b',
                    600: '#81a32b',
                    700: '#627d24',
                    800: '#4f6322',
                    900: '#425321',
                },
                brand: {
                    gold: '#d4af37',
                    dark: '#2d3436',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            }
        },
    },
    plugins: [],
}
