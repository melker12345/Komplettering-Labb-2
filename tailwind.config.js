/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f1f1f1", 
        secondary: "#121212", 
        accent1: "#05b2fc", 
        accent2: "#00f3ff",
        muted: "#EEEEEE", 

        dark: {
          primary: "#121212", 
          secondary: "#EEEEEE", 
          accent1: "#393E46", 
          accent2: "#00ADB5", 
          muted: "#a3a3a3", 
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        /*
        
        // original
        url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(5) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 1)'/><path d='M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='0.5' stroke='hsla(200, 0%, 84%, 1)' fill='none'/><path d='M-4.798 33.573C-3.149 32.533-1.446 31.306 0 30c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='0.5' stroke='hsla(198, 100%, 50%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-115)' fill='url(%23a)'/></svg>")

        url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='45' height='51.96' patternTransform='scale(2) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(197, 0%, 0%, 1)'/><path d='M52.48 44.47a15 15 0 01-14.96 0 15 15 0 00-7.48 12.96M7.48 44.42a15 15 0 01-14.96 0M15 57.44c0-5.35-2.9-10.35-7.52-13.02a15 15 0 017.48-12.97M7.48 18.5a14.97 14.97 0 01-14.98-.03m15.02-.03A15 15 0 0115 5.47a15 15 0 00-4.4-10.62m23.8.05A15 15 0 0030 5.53a15 15 0 017.48 12.96 14.9 14.9 0 0015.02-.03m-22.5 13a15.13 15.13 0 017.52 13.01m-7.56-39a15 15 0 01-14.96 0M7.48 18.5a15 15 0 017.48 12.96 15 15 0 0015.04 0 15 15 0 017.48-12.96'  stroke-width='1.5' stroke='hsla(194, 100%, 8%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-180,-207.84)' fill='url(%23a)'/></svg>")




        url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='45' height='51.96' patternTransform='scale(2) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(197, 0%, 100%, 1)'/><path d='M52.48 44.47a15 15 0 01-14.96 0 15 15 0 00-7.48 12.96M7.48 44.42a15 15 0 01-14.96 0M15 57.44c0-5.35-2.9-10.35-7.52-13.02a15 15 0 017.48-12.97M7.48 18.5a14.97 14.97 0 01-14.98-.03m15.02-.03A15 15 0 0115 5.47a15 15 0 00-4.4-10.62m23.8.05A15 15 0 0030 5.53a15 15 0 017.48 12.96 14.9 14.9 0 0015.02-.03m-22.5 13a15.13 15.13 0 017.52 13.01m-7.56-39a15 15 0 01-14.96 0M7.48 18.5a15 15 0 017.48 12.96 15 15 0 0015.04 0 15 15 0 017.48-12.96'  stroke-width='1' stroke='hsla(189, 99%, 42%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-180,-207.84)' fill='url(%23a)'/></svg>")

        background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(315, 0%, 0%, 1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1' stroke='hsla(186, 100%, 5%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-276,-160)' fill='url(%23a)'/></svg>")


        // WAVY BACKGROUND
        url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(5) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(330, 0%, 9%, 1)'/><path d='M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='0.5' stroke='hsla(190, 0%, 0%, 1)' fill='none'/><path d='M-4.798 33.573C-3.149 32.533-1.446 31.306 0 30c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='0.5' stroke='hsla(200, 89%, 57%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-115)' fill='url(%23a)'/></svg>")


        url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(5) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(330, 0%, 9%, 1)'/><path d='M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='0.5' stroke='hsla(190, 0%, 0%, 1)' fill='none'/><path d='M-4.798 33.573C-3.149 32.533-1.446 31.306 0 30c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176'  stroke-width='0.5' stroke='hsla(200, 89%, 57%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,-115)' fill='url(%23a)'/></svg>")

        */
        
        // darkBackgroundImage: `  url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(315, 0%, 0%, 1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1.5' stroke='hsla(186, 100%, 5%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-276,-160)' fill='url(%23a)'/></svg>")`,

        // backgroundImage: `  url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(315, 0%, 61%, 1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1' stroke='hsla(186, 51%, 35%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-276,-160)' fill='url(%23a)'/></svg>")`,

        darkBackgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(315, 0%, 0%, 1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1' stroke='hsla(186, 100%, 5%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-276,-160)' fill='url(%23a)'/></svg>")`,

        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(315, 0%, 81%, 1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1' stroke='hsla(186, 0%, 100%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-276,-160)' fill='url(%23a)'/></svg>")`,

      }


    },
  },
  plugins: [],
};
