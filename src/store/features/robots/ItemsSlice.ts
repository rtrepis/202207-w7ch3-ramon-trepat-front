import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./model/Item";

const itemsInitialState: Item[] = [];

const itemsSlice = createSlice({
  name: "items",
  initialState: itemsInitialState,
  reducers: {
    loadItems: (previousRobots, action: PayloadAction<Item[]>) => [
      ...action.payload,
    ],
    addItem: (previousRobots, action: PayloadAction<Item>) => [
      ...previousRobots,
      action.payload,
    ],
  },
});

export const itemsReducer = itemsSlice.reducer;

export const {
  loadItems: loadItemsActionCreator,
  addItem: addItemActionCreator,
} = itemsSlice.actions;
