import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot } from "./model/Robot";

const robotsInitialState: Robot[] = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: robotsInitialState,
  reducers: {
    loadRobots: (previousRobots, action: PayloadAction<Robot[]>) => [
      ...action.payload,
    ],
    addRobot: (previousRobots, action: PayloadAction<Robot>) => [
      ...previousRobots,
      action.payload,
    ],
  },
});

export const robotsReducer = robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  addRobot: addRobotActionCreator,
} = robotsSlice.actions;
