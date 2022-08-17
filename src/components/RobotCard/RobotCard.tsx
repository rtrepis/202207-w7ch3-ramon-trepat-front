import { Robot } from "../../store/features/robots/model/Robot";

interface RobotCardProps {
  robot: Robot;
}

const RobotCard = ({ robot: { name, image } }: RobotCardProps): JSX.Element => {
  return (
    <article className="robot">
      <h3>{name}</h3>
      <img src={image} alt={name} height="200" />
    </article>
  );
};

export default RobotCard;
