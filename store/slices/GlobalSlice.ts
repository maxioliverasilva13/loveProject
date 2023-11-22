import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  darkMode: true,
};

const GlobalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setDarkMode(state, { payload }) {
      state.darkMode = payload;
    },
  },
});

export function useGlobal() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: any) => state.GlobalSlice);

  return { darkMode, setDarkMode: (payload: boolean) => dispatch(GlobalSlice.actions.setDarkMode(payload)) };
}

export default GlobalSlice.reducer;
