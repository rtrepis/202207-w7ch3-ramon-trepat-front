import jwt from "jwt-decode";

const decodeToken = (token: string) => {
  const payload: {
    id: string;
    userName: string;
    iat: number;
  } = jwt(token);

  const userDecode = {
    token: token,
    id: payload.id,
    userName: payload.userName,
  };
  return userDecode;
};

export default decodeToken;
