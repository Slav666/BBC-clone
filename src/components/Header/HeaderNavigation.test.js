import React from "react";

import { render, screen } from "../../test/test.utils";
import HeaderNewsNavigation from "./HeaderNewsNavigation";

describe("Header navigation tests", () => {
  it("renders home link in the header navigation bar", () => {
    render(<HeaderNewsNavigation />);
    const linkElement = screen.getByText("Home");
    expect(linkElement).toBeInTheDocument();
    // screen.debug();
  });
});
