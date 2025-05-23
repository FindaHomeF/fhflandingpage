/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			gray:'var(--gray)',
			primary:'var(--primary)',
			secondary:'var(--secondary)',
			tetiary:'var(--tetiary)',
			lightSec:'var(--light-sec)',
			graySec:'var(--gray-secondary)',
			lightGray:'var(--light-gray)',
			darkBlue:'#0D2740',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.w-93p-mx-auto': {
        width: '93%',
        marginLeft: 'auto',
        marginRight: 'auto',
        '@screen lg': {
          width: '90%',
        },
        '@screen 2xl': {
          width: '85%',
        }
        },
        '.w-90p-mx-auto': {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        },
        '.flex-itc': {
          display: 'flex',
          alignItems: 'center',
        },
        '.flex-itc-jub': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        },
        '.flex-itc-juc': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
      },
      require("tailwindcss-animate")
],
};
