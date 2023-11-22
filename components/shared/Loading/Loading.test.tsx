import Component from "./Loading";
import { render } from "@testing-library/react";
import React from "react";

describe("Loading", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Component />);
    expect(baseElement).toBeTruthy();
  });
});
