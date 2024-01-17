import { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,

  args: {
    children:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque odit quibusdam natus dolor, eius deserunt esse consequuntur inventore nulla cum magnam. Esse accusantium modi doloremque delectus repellendus officiis reiciendis veniam.",
    size: "md",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const StrongTag: StoryObj<TextProps> = {
  args: {
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque odit quibusdam natus dolor, eius deserunt esse consequuntur inventore nulla cum magnam. Esse accusantium modi doloremque delectus repellendus officiis reiciendis veniam.",
    as: "strong",
  },
};
