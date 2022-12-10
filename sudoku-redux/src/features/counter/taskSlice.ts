import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  value: string[];
}

const initialState: TaskState = {
  value: [],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    incremented(state, action) {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    decremented(state, action) {
      console.log(action.payload);

      state.value = state.value.filter((item) => item !== action.payload);
    },
  },
});

export const { incremented, decremented } = taskSlice.actions;
export default taskSlice.reducer;
