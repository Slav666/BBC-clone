import React from "react";

import { render, screen, within } from "@testing-library/react";
import HeaderNewsNavigation from "./HeaderNewsNavigation";

test("renders home link", () => {
  render(<HeaderNewsNavigation />);
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
