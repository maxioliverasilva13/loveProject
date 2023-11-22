import Divider from "./Divider";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Divider",
  tags: ["autodocs"],
  component: Divider,
} as Meta;

export const Default: StoryObj<typeof Divider> = {
  args: {},
};
