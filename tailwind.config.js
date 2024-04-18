module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // these are my custom colors
      colors: {
        primary: '#f1f1f1',
        secondary: '#121212',
        accent1: '#028ec9',
        accent2: '#026fc9',
        muted: '#EEEEEE',

        dark: {
          primary: '#121212',
          secondary: '#EEEEEE',
          accent1: '#393E46',
          accent2: '#00ADB5',
          muted: '#a3a3a3',
        },
      },
      // defineing custom z-indecies to for example 'z-1' instead of 'z-10' etc.
      // since there documentations states that the default z-indecies are +10 instead of +1 but the application works with this removed
      // so I'm not sure if this is needed, but atleast now i know this :)
      // https://tailwindcss.com/docs/z-index
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      // setting the default border width to 1px
      borderWidth: {
        DEFAULT: '0.0625rem',
      },
      // defining custom background images for dark and light mode
      // from https://pattern.monster/
      backgroundImage: {
        backgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(315, 0%, 81%, 1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1' stroke='hsla(186, 0%, 100%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-276,-160)' fill='url(%23a)'/></svg>")`,
        darkBackgroundImage: `url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.141' height='40' patternTransform='scale(2) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(315, 0%, 0%, 1)'/><path d='M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z'  stroke-width='1' stroke='hsla(186, 100%, 5%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(-276,-160)' fill='url(%23a)'/></svg>")`,
      },
    },
  },
};
