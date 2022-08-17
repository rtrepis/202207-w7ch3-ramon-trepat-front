import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import RobotCard from "../RobotCard/RobotCard";

const RobotsList = (): JSX.Element => {
  const { robots, getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <>
      <h2>Robots list</h2>
      <ul className="robots">
        {robots.map((robot) => (
          <li key={robot.id}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
