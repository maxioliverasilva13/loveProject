import Loading from "./Loading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Loading",
  tags: ["autodocs"],
  component: Loading,
} as Meta;

export const Default: StoryObj<typeof Loading> = {
  args: {
    color: "bg-purple-400",
  },
};
