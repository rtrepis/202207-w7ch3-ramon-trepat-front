import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import { ProtoRobot } from "../../store/features/robots/model/Robot";

const NewRobot = (): JSX.Element => {
  const { createRobot } = useApi();

  const initialRobot: ProtoRobot = {
    name: "",
    image: "",
    creationDate: new Date(),
  };

  const [newRobot, setNewRobot] = useState(initialRobot);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRobot({
      ...newRobot,
      [event.target.id]: event.target.value,
    });
  };

  const createNewRobot = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createRobot(newRobot);

    setNewRobot(initialRobot);
  };

  const hasEmptyFields = newRobot.name === "" || newRobot.image === "";

  return (
    <>
      <h2>New Robot</h2>
      <form
        className="new-robot"
        autoComplete="off"
        noValidate
        onSubmit={createNewRobot}
      >
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={newRobot.name}
            onChange={onChangeField}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image: </label>
          <input
            type="url"
            id="image"
            value={newRobot.image}
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

export default NewRobot;
