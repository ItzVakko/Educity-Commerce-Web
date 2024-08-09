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
      const existingItem = state.items.find(
        (item) =>
          item._id === newItem._id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor === newItem.selectedColor
      );

      if (existingItem) {
        existingItem.qty += newItem.qty;
        existingItem.sum = existingItem.price * existingItem.qty;
      } else {
        state.items.push({
          ...newItem,
          sum: newItem.price * newItem.qty,
        });
      }
    },
    updateItemQuantity: (state, action) => {
      const { _id, selectedSize, selectedColor, qty } = action.payload;
      const item = state.items.find(
        (item) =>
          item._id === _id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (item) {
        item.qty = qty;
        item.sum = item.price * qty;
      }
    },
    delItem: (state, action) => {
      const { _id, selectedSize, selectedColor } = action.payload;
      state.items = state.items.filter(
        (item) =>
          item._id !== _id ||
          item.selectedSize !== selectedSize ||
          item.selectedColor !== selectedColor
      );
    },
  },
});

export const { addItem, updateItemQuantity, delItem } = cartSlice.actions;
export default cartSlice.reducer;
