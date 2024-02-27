import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "./slices/authSlice";
import { userApiSlice } from "./api/api";
import { userSlice } from './api/userProtectedApi'
import taskSlice from "./slices/taskSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    task:taskSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [userSlice.reducerPath]:userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware, userSlice.middleware,),
});

setupListeners(store.dispatch);
