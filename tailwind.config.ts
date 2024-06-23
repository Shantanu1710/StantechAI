import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '4rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '7rem',
        '3xl': '9rem',

      },
      
    },


    extend: {
      colors: {
        primary: '#000',
        secondary: '#272e5c',
        tertiary:'#8a8a8a'
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      screens: {
        vs: '375px',
        xs: '425px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1366px',
        '2xl': '1920px',
        '3xl': '3840px',

      }
    }
  },

  plugins: [],
};
export default config;
