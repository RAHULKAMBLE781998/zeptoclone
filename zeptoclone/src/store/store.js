import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  subtotal: 0,
  deliveryFee: 1.99,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      if (quantity < 1) {
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    calculateTotals: (state) => {
      state.subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      state.total = state.subtotal + state.deliveryFee;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, calculateTotals } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});