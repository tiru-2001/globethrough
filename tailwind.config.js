/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme_color: '#01493E',
        features_color: '#FFFBEF',
      },
      backgroundImage: {
        hero_text: 'linear-gradient(to right, #E9E4F0, #D3CCE3)',
        span_text: 'linear-gradient(to right, #44a08d, #093637)',
        destination:
          'linear-gradient(180deg, rgba(39,40,39,0.5708333333333334) 0%, rgba(212,214,212,0.371953781512605) 67%)',
        features:
          'linear-gradient(180deg, rgba(2,57,49,1) 0%, rgba(51,108,99,1) 67%)',
      },
      boxShadow: {
        features: '0px 0px 20px -8px #01493E',
        features_image: '0px 9px 20px -5px gray',
      },
      screens: {
        xs: '475px', // Custom screen for extra small devices
        sm: '670px', // Default small breakpoint
        md: '768px', // Default medium breakpoint
        lg: '1024px', // Default large breakpoint
        xl: '1280px', // Default extra-large breakpoint
        '2xl': '1536px', // Default 2xl breakpoint
        '3xl': '1920px', // Custom screen for ultra-wide screens
      },
    },
  },
  plugins: [],
};
