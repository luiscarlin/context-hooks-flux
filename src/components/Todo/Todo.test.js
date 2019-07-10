import React from "react";
import Todo from "./Todo";

describe("Todo", () => {
  it("renders text", () => {
    let wrapper = render(<Todo text={"something here"} />);
    expect(wrapper.getByTestId("todo__text")).toHaveTextContent(
      "something here"
    );
  });
  // fit("has an X that calls a callback when pressed");
  // fit("has a checkbox that calls a callback when pressed");
});
