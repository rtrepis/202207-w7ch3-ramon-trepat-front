import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import { ProtoItem } from "../../store/features/robots/model/Item";

const NewItem = (): JSX.Element => {
  const { createItem } = useApi();

  const initialItem: ProtoItem = {
    item: "",
    userItem: "",
  };

  const [newItem, setNewItem] = useState(initialItem);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem({
      ...newItem,
      [event.target.id]: event.target.value,
    });
  };

  const createNewItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createItem(newItem);

    setNewItem(initialItem);
  };

  const hasEmptyFields = newItem.item === "" || newItem.userItem === "";

  return (
    <>
      <h2>New Item</h2>
      <form
        className="new-item"
        autoComplete="off"
        noValidate
        onSubmit={createNewItem}
      >
        <div className="form-group">
          <label htmlFor="name">Item: </label>
          <input
            type="text"
            id="item"
            value={newItem.item}
            onChange={onChangeField}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userItem">userItem: </label>
          <input
            type="url"
            id="userItem"
            value={newItem.userItem}
            onChange={onChangeField}
          />
        </div>
        <div className="form-group">
          <button type="submit" disabled={hasEmptyFields}>
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default NewItem;
