import React from "react";
import { render, screen } from "../../test/test.utils";
import { fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header section tests", () => {
  it("renders Home link in the top header section", () => {
    render(<Header />);
    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).toBeInTheDocument();
  });
  it("opens extra header menu options when arrow icon clicked", () => {
    render(<Header></Header>);
    fireEvent.click(screen.getByText("More"));
    const fastCarsLink = screen.getByText("Fast Cars");
    expect(fastCarsLink).toBeInTheDocument();
  });
});
