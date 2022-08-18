import { PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ProtoItem, Item } from "../store/features/robots/model/Item";
import { addItemActionCreator } from "../store/features/robots/ItemsSlice";
import { ProtoUser } from "../store/features/robots/model/User";
import decodeToken from "../utils/authorization";
import { loginUserActionCreator } from "../store/features/robots/UserSlice";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL as string;

  //const items = useAppSelector(({ items }) => items);
  const dispatch = useDispatch();

  const loginUser = async (userDataLogin: ProtoUser) => {
    const response = await fetch(`${url}users/login`, {
      method: "POST",
      body: JSON.stringify(userDataLogin),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { user } = await response.json();

    const userDecode = await decodeToken(user.token);

    dispatch(loginUserActionCreator(userDecode));
    localStorage.setItem("token", user.token);
  };

  const createItem = async (newItem: ProtoItem) => {
    const response = await fetch(`${url}items/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const { item }: { item: Item } = await response.json();

    dispatch<PayloadAction<Item>>(addItemActionCreator(item));
  };

  return { loginUser, createItem };
};

export default useUser;
