import { Providers } from "../src/providers/Providers";
import { light, dark, blue } from "../src/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      items: ["light", "dark", "blue"],
      showName: true,
    },
  },
};

function getThemeFromContext(context) {
  switch (context?.globals?.theme) {
    case "dark":
      return dark;
    case "blue":
      return blue;
    default:
      return light;
  }
}

const withThemeProvider = (Story, context) => {
  const theme = getThemeFromContext(context);

  return (
    <Providers theme={theme}>
      <Story {...context} />
    </Providers>
  );
};

export const decorators = [withThemeProvider];
