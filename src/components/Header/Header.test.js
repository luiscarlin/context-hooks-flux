import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";
import moment from "moment";

afterEach(cleanup);

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
