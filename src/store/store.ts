import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { itemsReducer } from "./features/robots/ItemsSlice";
import { userReducer } from "./features/robots/UserSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
