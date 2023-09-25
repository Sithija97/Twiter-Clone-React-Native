import { ITaskInitialState, Task } from "./../../models/index";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import taskService from "../../services/task-service";

const initialState: ITaskInitialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new goal
export const createTask = createAsyncThunk(
  "tasks/create",
  async (_, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      if (user) {
        const token = user.token;
        return await taskService.createTask({ text: "test task" }, token);
      }
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user goals
export const getTasks = createAsyncThunk(
  "tasks/getAll",
  async (_, thunkAPI) => {
    const user = (thunkAPI.getState() as RootState).auth.user;
    try {
      if (user) {
        const token = user.token;
        return await taskService.getTasks(token);
      }
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const goalSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload.text);
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
