import React, { useState } from "react";
import "./App.css";
import { loginUser, refreshToken, registerUser } from "./api/auth/auth.ts";

function getCookie(name: string) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    registerUser({ email, password }).then((res) => {
      if (res.error) {
        return console.log(res.error);
      }
      console.log(res.data);
    });
  };

  const handleLogin = (email: string, password: string) => {
    loginUser({ email, password }).then((res) => {
      if (res.error) {
        return console.log(res.error);
      }
      console.log(res.data);
    });
  };

  const handleRefresh = () => {
    const refresh = getCookie("refreshToken");
    if (refresh) {
      refreshToken(refresh).then((res) => {
        if (res.error) {
          return console.log(res.error);
        }
        console.log(res);
      });
    }
  };

  return (
    <>
      <input
        type="text"
        value={email}
        placeholder={"Email"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
      />
      <input
        type="text"
        value={password}
        placeholder={"psw"}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <button onClick={handleRegister}>Зарегаться</button>
      <button onClick={() => handleLogin(email, password)}>login</button>
      <button onClick={handleRefresh}>Refresh</button>
    </>
  );
}

export default App;
