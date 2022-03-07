import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    let json = localStorage.getItem("facebook-clone");
    json = JSON.parse(json);
    return json && json.loginStatus === "true" ? true : false;
  });
  const [userdata, setUserdata] = useState({});
  const [users, setUsers] = useState([]);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    let json = localStorage.getItem("facebook-clone");
    json = JSON.parse(json);

    json && json.loginStatus === "true"
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
    let json1 = localStorage.getItem("usedata");
    json1 = JSON.parse(json1);
    setUserdata(json1);
    fetch("https://facebook-json-server.herokuapp.com/users")
      .then((item) => item.json())
      .then((item) => {
        console.log(item);
        setUsers(item);
      });
  }, []);
  const setLogin = (userdata) => {
    setIsLoggedIn(true);
    setUserdata(userdata);
    const datauser = JSON.stringify(userdata);
    localStorage.setItem("usedata", datauser);
    const data = JSON.stringify({ loginStatus: "true" });
    localStorage.setItem("facebook-clone", data);
  };

  const login = ({ contact, password }) => {
    const validate = async () => {
      const res = await fetch(
        `https://facebook-json-server.herokuapp.com/users/?contact=${contact}`
      );
      const json = await res.json();
      password === json[0].password ? setLogin(json[0]) : setIsLoggedIn(false);
    };
    const data = JSON.stringify({ loginStatus: "true" });
    localStorage.setItem("facebook-clone", data);
    const datauser = JSON.stringify(userdata);
    localStorage.setItem("usedata", datauser);
    validate();
  };

  const logout = () => {
    setIsLoggedIn(false);
    const data = JSON.stringify({ loginStatus: "false" });
    localStorage.setItem("facebook-clone", data);
    console.log(localStorage);
  };

  const forgotpassword = async ({ contact, password }) => {
    const res = await fetch(
      `https://facebook-json-server.herokuapp.com/users?contact=${contact}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ password: password }),
      }
    );
    const json = await res.json();
    console.log(json);
  };

  const signup = async (data) => {
    console.log("hi");
    const res = await fetch(
      "https://facebook-json-server.herokuapp.com/users",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const json = await res.json();
    setLogin(json);
  };

  return (
    <AuthContext.Provider
      value={{
        location,
        userdata,
        login,
        isLoggedIn,
        signup,
        logout,
        forgotpassword,
        users,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
