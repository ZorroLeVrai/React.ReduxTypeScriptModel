import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter: sliceReducer
  }
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
