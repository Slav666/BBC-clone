import React from "react";

import { render, screen } from "../../test/test.utils";
import { fireEvent } from "@testing-library/react";
import HeaderNewsNavigation from "./HeaderNewsNavigation";

describe("Header navigation tests", () => {
  it("renders home link in the header navigation bar", () => {
    render(<HeaderNewsNavigation />);
    const linkElement = screen.getByText("Home");
    expect(linkElement).toBeInTheDocument();
  });
  // it("opens extra header menu options when arrow icon clicked", () => {
  //   render(<HeaderNewsNavigation />);
  //   fireEvent.click(screen.getByTestId("ArrowDropDownIcon"));
  //   const fastCarsLink = screen.getByText("Fast Cars");
  //   expect(fastCarsLink).toBeInTheDocument();
  // });
});
