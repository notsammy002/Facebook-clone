import React, { useEffect } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUsers] = React.useState([]);
  const [select, setSelect] = React.useState("default");
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((item) => item.json())
      .then((item) => {
        console.log(item);
        setUsers(item);
      });
  }, []);
  return (
    <Context.Provider value={{ user, setUsers, select, setSelect }}>
      {children}
    </Context.Provider>
  );
};
