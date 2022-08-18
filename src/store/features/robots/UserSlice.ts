import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./model/User";

const usersInitialState: User = {
  id: "",
  userName: "",
  token: "",
};

const userSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUser: (previousSate, action: PayloadAction<User>) => action.payload,
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
