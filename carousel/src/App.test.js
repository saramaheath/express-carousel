import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//smoke test
it("renders without crashing", function () {
  render(<App />);
});

//snapshot test
it("matches snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
