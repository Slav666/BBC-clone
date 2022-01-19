import React from "react";

import { render as rtlRender } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = createMockStore([thunk]);

function render(ui, { state = {}, history: historyOptions, ...options } = {}) {
  const store = mockStore(state);
  const history = createMemoryHistory(historyOptions);
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter history={history}>{children}</BrowserRouter>
    </Provider>
  );
  const utils = rtlRender(ui, { wrapper: Wrapper, ...options });
  return { ...utils, store };
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { render };
