import React from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = React.useState([]);
    const [select, setSelect] = React.useState("default");

    return (
        <Context.Provider value={{ user, setUser, select, setSelect }}>{children}</Context.Provider>
    )
}