import { createSlice } from "@reduxjs/toolkit";

const sldItemSlice = createSlice({
  name: "selectedItem",
  initialState: { item: null },
  reducers: {
    setSelectedItem: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setSelectedItem } = sldItemSlice.actions;
export default sldItemSlice.reducer;
