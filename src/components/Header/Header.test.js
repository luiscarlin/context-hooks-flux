import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Header", () => {
  it("renders the title", () => {
    const wrapper = render(<Header />);
    expect(wrapper.getByTestId("header__title")).toHaveTextContent("Do this");
  });
});
