import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.dark,
});

// Adicionando o background dark no parameters do preview
export const parameters = {
  backgrounds: {
    default: "dark",
  },
};
