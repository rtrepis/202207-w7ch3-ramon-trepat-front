import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ProtoRobot, Robot } from "../store/features/robots/model/Robot";
import {
  addRobotActionCreator,
  loadRobotsActionCreator,
} from "../store/features/robots/robotsSlice";
import { useAppSelector } from "../store/hooks";

const useApi = () => {
  const url = process.env.REACT_APP_API_URL as string;

  const robots = useAppSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const getRobots = useCallback(async () => {
    const response = await fetch(`${url}robots/`);
    const { robots }: { robots: Robot[] } = await response.json();

    dispatch<PayloadAction<Robot[]>>(loadRobotsActionCreator(robots));
  }, [dispatch, url]);

  const createRobot = async (newRobot: ProtoRobot) => {
    const response = await fetch(`${url}robots/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRobot),
    });
    const { robot }: { robot: Robot } = await response.json();

    dispatch<PayloadAction<Robot>>(addRobotActionCreator(robot));
  };

  return { robots, getRobots, createRobot };
};

export default useApi;
