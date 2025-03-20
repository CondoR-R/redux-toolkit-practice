import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUserId: null,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    clearSelection: (state) => {
      state.selectedUserId = null;
    },
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },
});

export default userDetailsSlice.reducer;

export const { clearSelection, selectUser } = userDetailsSlice.actions;
