import { Item } from "../../store/features/robots/model/Item";

interface RobotCardProps {
  robot: Item;
}

const RobotCard = ({
  robot: { item, userItem },
}: RobotCardProps): JSX.Element => {
  return (
    <article className="item">
      <h3>{item}</h3>
      <h4>{userItem}</h4>
    </article>
  );
};

export default RobotCard;
