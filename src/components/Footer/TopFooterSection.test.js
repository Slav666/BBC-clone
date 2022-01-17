import React from "react";

import { fireEvent, render, screen, within } from "@testing-library/react";
import TopFooterSection from "./TopFooterSection";

describe("bottom footer section", () => {
  it("renders contact the bbc link", () => {
    render(<TopFooterSection />);
    const linkElement = screen.getByText("Get news alert");
    expect(linkElement).toBeInTheDocument();
  });
  it("opens new browser tab when link clicked", () => {
    render(<TopFooterSection />);
    const linkElement = screen.getByText("Get news alert");
    fireEvent.click(linkElement);
    expect(linkElement).toHaveAttribute("href");
  });
});
