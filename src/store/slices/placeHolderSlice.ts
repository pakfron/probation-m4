import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataPlaceHolder } from "../../type/jsonPlaceHolder.type";
import { RootState } from "../store";
import { getPlaceHolderPost } from "../../api/placeHolder.service";

export interface placeHolderSlice {
  placeHoderData?: DataPlaceHolder[];
  isError: boolean;
  message: string;
  isLoading: boolean;
  count: number;
}

const initialState: placeHolderSlice = {
  isError: false,
  isLoading: false,
  message: "",
  count: 0,
};

const placeHolderSlice = createSlice({
  initialState,
  name: "placeHolderSlice",
  reducers: {
    increaseCount: (state: placeHolderSlice) => {
      state.count = state.count + 1;
    },
    decreaseCount: (state: placeHolderSlice) => {
      state.count = state.count - 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(getJSONPlaceHolder.fulfilled, (state, action) => {
      if (action.payload) {
        state.placeHoderData = action.payload;
        state.isLoading = false;
      }
    });
    builder.addCase(getJSONPlaceHolder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getJSONPlaceHolder.rejected, (state, action) => {
      if (action.error.message?.length) {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      }
    });
  },
});

export const getJSONPlaceHolder = createAsyncThunk(
  "placeholder/get",
  async (_, { rejectWithValue }) => {
    try {
      const result = await getPlaceHolderPost();

      return result;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const placeHolderDataSelector = (
  store: RootState
): DataPlaceHolder[] | undefined => store.placeHolderReducer.placeHoderData;
export const countSelector = (store: RootState): number =>
  store.placeHolderReducer.count;
export const { increaseCount, decreaseCount } = placeHolderSlice.actions;

export default placeHolderSlice.reducer;
