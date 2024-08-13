/* eslint-disable react-hooks/rules-of-hooks */

import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../use-local-storage";

const { readLocalStorage, updateLocalStorage } = useLocalStorage("auth", {
  isAuth: false,
  token: "",
});

export const auth = createSlice({
  name: "auth",
  initialState: readLocalStorage(),
  reducers: {
    logout: () => updateLocalStorage(null),
    login: (_state, action) =>
      updateLocalStorage({
        isAuth: true,
        ...action.payload,
      }),
  },
});
export const authActions = auth.actions;
