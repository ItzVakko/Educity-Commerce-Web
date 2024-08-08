import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.qty += 1;
        existingItem.sum = existingItem.price * existingItem.qty;
      } else {
        state.items.push({
          ...newItem,
          qty: 1,
          sum: newItem.price,
        });
      }
    },
    updateItemQuantity: (state, action) => {
      const { _id, qty } = action.payload;
      const item = state.items.find((item) => item._id === _id);

      if (item) {
        item.qty = qty;
        item.sum = item.price * qty;
      }
    },
    delItem: (state, action) => {
      const itemId = action.payload._id;
      state.items = state.items.filter((item) => item._id !== itemId);
    },
  },
});

export const { addItem, updateItemQuantity, delItem } = cartSlice.actions;
export default cartSlice.reducer;
