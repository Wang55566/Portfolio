import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const theme = extendTheme({
  config,
  colors: {
    primary: {
      50: "#E6F7E4",
      100: "#C2E7C0",
      200: "#9ED79D",
      300: "#7AC77A",
      400: "#56B757",
      500: "#32A733",
      600: "#1E9710",
      700: "#0A870D",
      800: "#006709",
      900: "#004305",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Teko', sans-serif`,
  }
});

export default theme;
