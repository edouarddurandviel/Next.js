import userReducers from "./user/slices";
import uiEventsReducers from "./uiEvents/slices";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducers,
      events: uiEventsReducers,
    },
  });
};

// Export RootState and AppDispatch
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
