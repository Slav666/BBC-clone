import React from "react";
import { render, screen } from "../../test/test.utils";
import Header from "./Header";

describe("Header section tests", () => {
  it("renders Home link in the top header section", () => {
    render(<Header />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
