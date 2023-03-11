import { configureStore } from "@reduxjs/toolkit";
import { cloutTestApi } from "./cloutTest/cloutTest.api";

export const store = configureStore({
  reducer: {
    [cloutTestApi.reducerPath]: cloutTestApi.reducer,
  },
  middleware: (getDefailtMiddleware) =>
    getDefailtMiddleware().concat(cloutTestApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
