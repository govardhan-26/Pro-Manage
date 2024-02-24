import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import authReducer from './slices/authSlice'
// import roleReducer from './slices/role'
export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // role: roleReducer,
    // [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(userApiSlice.middleware),
});

setupListeners(store.dispatch);
