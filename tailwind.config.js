/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("/home-bg.png")',
        'triangles': "url('/FM/TeamCard.png')"
      },
      colors: {
        primary: "#86EBD9",
        muted: "#2F3F4C",
      },

      boxShadow: {
        "neon-blue": "0 0 10px #00ffff",
      },

      fontFamily: {
        sixtyfour: ["Sixtyfour", "cursive"],
        'beyonders': ['Beyonders', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        spinSlow: 'spin 30s linear infinite',
        pulseFast: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'

      },
    },
  },
  plugins: [],
};
