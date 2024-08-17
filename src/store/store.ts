import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import placeHolderReducer from "./slices/placeHolderSlice";
const reducer = {
  placeHolderReducer,
};

export const store = configureStore({
  reducer,
 
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
