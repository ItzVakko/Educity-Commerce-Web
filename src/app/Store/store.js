import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./Reducers/cartReducer";
import authReducer from "./Reducers/authReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        ignoredPaths: ["cart.items.dates"],
      },
    }),
});

export const persistor = persistStore(store);
