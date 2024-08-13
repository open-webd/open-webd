import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./states/auth";
import React, { useEffect } from "react";
const store = configureStore({
  reducer: {
    auth: auth.reducer,
  },
});
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {}, []);
  return <Provider store={store}>{children}</Provider>;
}
