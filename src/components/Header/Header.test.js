import React from "react";

import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index";
import Header from "./Header";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
