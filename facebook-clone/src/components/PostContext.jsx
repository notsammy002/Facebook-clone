import React from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = React.useState([]);
    const [select, setSelect] = React.useState("default");
    const [comment, setComment] = React.useState([]);

    return (
        <Context.Provider value={{ user, setUser, 
                                    select, setSelect,
                                    comment, setComment}}>{children}</Context.Provider>
    )
}