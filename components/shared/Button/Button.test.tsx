import Component from "./Button";
import { render } from "@testing-library/react";
import React from "react";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Component label="test" />);
    expect(baseElement).toBeTruthy();
  });
});
