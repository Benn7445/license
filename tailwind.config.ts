import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pingel: {
          '0%, 49%': { opacity: '1' },
          '50%, 99%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        pingel: 'pingel 0.2s linear 3',
        fadeIn: 'fadeIn 1s ease-in-out 1',
        typing: "typing 3s steps(60) 1 alternate, blink .7s 1"
      }
    },
  },
  plugins: [],
}
export default config
