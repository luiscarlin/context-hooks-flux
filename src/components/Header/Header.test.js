import React from "react";
import Header from "./Header";

jest.mock("moment", () => () => ({
  format: () => "Monday, July 8th"
}));

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Header />);
  });
  it("renders the title", () => {
    expect(wrapper.getByTestId("header__title")).toHaveTextContent("Do this");
  });

  it("renders the current date", () => {
    expect(wrapper.getByTestId("header__date")).toHaveTextContent(
      "Monday, July 8th"
    );
  });
});
