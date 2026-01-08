/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                govBlue: '#1E40AF',
                success: '#15803D',
                risk: '#B91C1C',
                warning: '#CA8A04',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                body: ['Noto Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
