import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const saveStateMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith('counters/')) {
    localStorage.setItem('counters', JSON.stringify(store.getState()));
  }
  return result;
}
