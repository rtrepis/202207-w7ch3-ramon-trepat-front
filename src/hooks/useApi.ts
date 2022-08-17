import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ProtoItem, Item } from "../store/features/robots/model/Item";
import {
  addItemActionCreator,
  loadItemsActionCreator,
} from "../store/features/robots/ItemsSlice";
import { useAppSelector } from "../store/hooks";

const useApi = () => {
  const url = process.env.REACT_APP_API_URL as string;

  const items = useAppSelector(({ items }) => items);
  const dispatch = useDispatch();

  const getItems = useCallback(async () => {
    const response = await fetch(`${url}items/`);
    const { items }: { items: Item[] } = await response.json();

    dispatch<PayloadAction<Item[]>>(loadItemsActionCreator(items));
  }, [dispatch, url]);

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

  return { items, getItems, createItem };
};

export default useApi;
