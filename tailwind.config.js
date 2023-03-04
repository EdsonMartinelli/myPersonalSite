/** @type {import('tailwindcss').Config} */
const radixColor = require("@radix-ui/colors")
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        app: radixColor.gray.gray1,
        appDark: radixColor.grayDark.gray1,

        component: radixColor.gray.gray3,
        componentDark: radixColor.grayDark.gray3,

        componentHover: radixColor.gray.gray4,
        componentHoverDark: radixColor.grayDark.gray4,

        componentActive: radixColor.gray.gray5,
        componentActiveDark: radixColor.grayDark.gray5,

        separator: radixColor.gray.gray6,
        separatorDark: radixColor.grayDark.gray6,

        textComponent: radixColor.gray.gray11,
        textComponentDark: radixColor.grayDark.gray11,

        textTitle: radixColor.gray.gray12,
        textTitleDark: radixColor.grayDark.gray12,


        borderTextImportant: radixColor.pinkDark.pink9,
        borderTextImportantHover: radixColor.pinkDark.pink10,


        
      },
      backgroundImage: {
        radial:`radial-gradient(circle 800px at 700px 200px, ${radixColor.purple.purple2}, transparent),
                  radial-gradient(circle 600px at calc(100% - 300px) 300px, ${radixColor.mint.mint4}, transparent),
                  radial-gradient(circle 800px at right center, ${radixColor.sky.sky3}, transparent),
                  radial-gradient(circle 800px at right bottom, ${radixColor.sky.sky1}, transparent),
                  radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), ${radixColor.pink.pink3}, ${radixColor.pink.pink1}, transparent)
                  `,
        radialDark:`radial-gradient(circle 800px at 700px 200px, ${radixColor.purpleDark.purple2}, transparent),
                      radial-gradient(circle 600px at calc(100% - 300px) 300px, ${radixColor.mintDark.mint4}, transparent),
                      radial-gradient(circle 800px at right center, ${radixColor.skyDark.sky3}, transparent),
                      radial-gradient(circle 800px at right bottom, ${radixColor.skyDark.sky1}, transparent),
                      radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), ${radixColor.pinkDark.pink3}, ${radixColor.pinkDark.pink1}, transparent)
                      `,
        grid:`linear-gradient(to bottom, ${radixColor.gray.gray1}, transparent 40%, ${radixColor.gray.gray1}),
              url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")
             `,
        gridDark:`linear-gradient(to bottom, ${radixColor.grayDark.gray1}, transparent 40%, ${radixColor.grayDark.gray1}),
                  url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' opacity='0.05' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")
                 `,
      },
      keyframes: {

        toastShow:{
          from: { opacity: 0, transform: "translateX(-100%)" },
          to: { opacity: 1, transform: "translateX(0%)"},
        },
        toastClose:{
          from: { opacity: 1, transform: "translateX(0%)"},
          to: { opacity: 0, transform: "translateX(-100%)"},
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        overlayClose:{
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(25%, -25% ) scale(0.5)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        contentClose:{
          from: { opacity: 1, transform: 'scale(1)' },
          to: { opacity: 0, transform: 'translate(50%, -50% ) scale(0.05)' },
        }
      },
      animation: {
        overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayClose: 'overlayClose 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentClose: 'contentClose 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        toastShow: 'toastShow 500ms cubic-bezier(0.16, 1, 0.3, 1)',
        toastClose: 'toastClose 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
  darkMode: "class"
}
