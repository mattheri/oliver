import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        max: "999",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        short: "100ms",
        default: "300ms",
        long: "500ms",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    scrollbarHide,
    forms,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "col-gap": (value) => ({
            columnGap: value,
          }),
        },
        { values: theme("spacing") },
      );
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "row-gap": (value) => ({
            rowGap: value,
          }),
        },
        { values: theme("spacing") },
      );
    }),
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".section-container": {
          maxWidth: theme("maxWidth.7xl"),
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        },
      });
    }),
    plugin(({ addComponents, theme }) => {
      return addComponents({});
    }),
  ],
} satisfies Config;
