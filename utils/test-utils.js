import { TodosService } from "@/services/TodosService";
import GlobalSlice from "@/slices/GlobalSlice";
import { configureStore } from "@reduxjs/toolkit";
import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        GlobalSlice,
        [TodosService.reducerPath]: TodosService.reducer,
      },
      preloadedState,
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(TodosService.middleware),
    }),

    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
