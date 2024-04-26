import {
  loginProps,
  refreshTokenRes,
  registerProps,
  responseType,
  tokensRes,
  userRes,
} from "./types.ts";

export const registerUser = ({
  email,
  password,
}: registerProps): Promise<responseType<userRes, string>> => {
  return fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(getCookie("accessToken"));
      return {
        data: data,
        error: undefined,
      };
    })
    .catch((err) => {
      return {
        data: undefined,
        error: err.message,
      };
    });
};

export const loginUser = ({
  email,
  password,
}: loginProps): Promise<responseType<tokensRes, string>> => {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(getCookie("accessToken"));
      return {
        data: data,
        error: undefined,
      };
    })
    .catch((err) => {
      return {
        data: undefined,
        error: err.message,
      };
    });
};

export const refreshToken = (
  refresh: string,
): Promise<responseType<refreshTokenRes, string>> => {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify({ refresh }),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(getCookie("accessToken"));
      return {
        data: data,
        error: undefined,
      };
    })
    .catch((err) => {
      return {
        data: undefined,
        error: err.message,
      };
    });
};
