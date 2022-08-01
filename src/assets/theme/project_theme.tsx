import { MantineThemeOverride, MantineProvider } from "@mantine/core";
const myTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    secondaryColor: [
      "rgb(188, 141, 66,0.1)",
      "rgb(188, 141, 66,0.2)",
      "rgb(188, 141, 66,0.3)",
      "rgb(188, 141, 66,0.4)",
      "rgb(188, 141, 66,0.5)",
      "rgb(188, 141, 66,0.6)",
      "rgb(188, 141, 66,0.7)",
      "rgb(188, 141, 66,0.8)",
      "rgb(188, 141, 66,0.9)",
      "rgb(188, 141, 66,1)",
    ],
    primaryColor: ["rgb(0, 121, 56)"],
    lightDark: ["rgb(29, 43, 57)"],
    lightWhiteTextColor: ["#f5f5f5"],
  },
  defaultRadius: 0,
};

export default myTheme;
