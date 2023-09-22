import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  //   userInfo: localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo")!)
  //     : null,
  userInfo: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
