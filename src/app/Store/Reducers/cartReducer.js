const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        ...action.payload,
      });
    },
    delItem: (state, action) => {
      const indexToRemove = action.payload.index;
      state.items = state.items.filter(
        (item, index) => index !== indexToRemove
      );
    },
  },
});

export const { addItem, delItem } = cartSlice.actions;

export default cartSlice.reducer;
