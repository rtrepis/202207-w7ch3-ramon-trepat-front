import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import RobotCard from "../ItemCard/ItemCard";

const ItemsList = (): JSX.Element => {
  const { items, getItems } = useApi();

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <>
      <h2>Items list</h2>
      <ul className="items">
        {items.map((items) => (
          <li key={items.id}>
            <RobotCard robot={items} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemsList;
