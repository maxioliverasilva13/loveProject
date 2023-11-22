import Todos from "./Todos";
import { render, fireEvent, cleanup } from "@/utils/test-utils";
import { RenderResult, act } from "@testing-library/react";
import React from "react";

window.scrollTo = jest.fn();

const data = [
  { _id: "1", title: "Test Item 1", completed: false },
  { _id: "2", title: "Test Item 2", completed: false },
];

describe("Todos", () => {
  let Component: RenderResult;

  beforeEach(async () => {
    act(() => {
      Component = render(<Todos todos={data} />);
    });
  });

  afterAll(() => cleanup());

  it("should render the list of items", () => {
    expect(Component.container).toBeTruthy();
    expect(Component.getByText("Test Item 1")).toBeInTheDocument();
    expect(Component.getByText("Test Item 2")).toBeInTheDocument();

    //snapshot
    expect(Component.asFragment()).toMatchSnapshot();
  });

  it("should update on complete", async () => {
    expect(Component.getAllByRole("checkbox", { checked: false })[0]).toBeInTheDocument();

    // await act(async () => (Component = render(<Todos todos={data} />)));
    await act(async () => fireEvent.click(Component.getAllByRole("checkbox")[0]));
    expect(Component.getAllByRole("checkbox", { checked: true })[0]).toBeInTheDocument();
  });

  it("should enable input when clicking add todo", () => {
    {
      expect(Component.queryByRole("textbox")).not.toBeInTheDocument();
      fireEvent.click(Component.getByText("Add a new Todo"));
      expect(Component.getByRole("textbox")).toBeInTheDocument();
    }
  });
});
