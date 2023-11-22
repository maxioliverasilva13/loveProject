import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Button",
  tags: ["autodocs"],
  component: Button,
} as Meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    label: "Example Button",
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
    label: "Example Button",
  },
};

export const Info: StoryObj<typeof Button> = {
  args: {
    variant: "info",
    label: "Example Button",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    variant: "link",
    label: "Dualboot Partners",
    href: "http://dualbootpartners.com",
  },
};
