import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import { ProtoUser } from "../../store/features/robots/model/User";

const LoginUser = (): JSX.Element => {
  const { loginUser } = useUser();

  const initialUserState: ProtoUser = {
    userName: "",
    password: "",
  };

  const [userDataLogin, setUserDataLogin] = useState(initialUserState);

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDataLogin({
      ...userDataLogin,
      [event.target.id]: event.target.value,
    });
  };

  const submitLoginUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    loginUser(userDataLogin);

    setUserDataLogin(initialUserState);
  };

  const hasEmptyFields =
    userDataLogin.userName === "" || userDataLogin.password === "";

  return (
    <>
      <h2>New User</h2>
      <form
        className="new-user"
        autoComplete="off"
        noValidate
        onSubmit={submitLoginUser}
      >
        <div className="form-group">
          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            id="userName"
            value={userDataLogin.userName}
            onChange={onChangeField}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={userDataLogin.password}
            onChange={onChangeField}
          />
        </div>
        <div className="form-group">
          <button type="submit" disabled={hasEmptyFields}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginUser;
