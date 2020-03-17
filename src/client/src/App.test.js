import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders name of project", () => {
  const { getByText } = render(<App />);
  const header = getByText(/React Node Template/i);
  expect(header).toBeInTheDocument();
});
