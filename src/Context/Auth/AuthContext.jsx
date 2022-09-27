import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { initState, loginReducer } from "./AuthReducer";

export const AuthContext = createContext();

const loginRequest = (data) => {
  return axios
    .post(`https://reqres.in/api/login`, data)
    .then((res) => res.data);
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initState);
  const [token, setToken] = useState("");
  const [isAuth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const action = {
      input: name,
      value: value,
    };
    dispatch(action);
  };

  const handleSubmit = () => {
    setLoading(true);
    loginRequest(state).then((res) => {
      setLoading(false);
      setAuth(true);
      setToken(res.token);
    });
  };

  const handleLogout = () => {
    setToken("");
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ state, handleChange, handleSubmit, isAuth, token, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
