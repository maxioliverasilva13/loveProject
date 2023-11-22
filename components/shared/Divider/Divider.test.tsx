import Component from "./Divider";
import { render } from "@testing-library/react";
import React from "react";

describe("Divider", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Component />);
    expect(baseElement).toBeTruthy();
  });
});
