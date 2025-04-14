// since using ESM need to use import...from....and export default instead of copy/pasting from docs
// https://www.material-tailwind.com/docs/react/guide/vite

import withMt from "@material-tailwind/react/utils/withMt"


/** @type {import('tailwindcss').Config} */
export default withMt({
  content: ['./index.html','./src/**/*.{vue,js,jsx,ts,tsx}',
   "./client/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./client/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

