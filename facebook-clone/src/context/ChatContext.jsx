import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  let [chatwindow, setChatWindow] = useState(false);
  let [chat, setChat] = React.useState([]);
  let [curChatId, setcurChatId] = React.useState(null);
  let [changeChat, SetChangeChat] = React.useState({});

  const addChat = (id, mess) => {
    fetch(`http://localhost:3000/chat/${id}`)
      .then((data) => data.json())
      .then((data) => {
        var chat = data.chatbox;
        chat.push({
          id: uuid(),
          sender: "p1",
          message: mess,
        });
        fetch(`http://localhost:3000/chat/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            chatbox: chat,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            SetChangeChat({ ...json });
          });
      });
  };
  useEffect(() => {
    fetch("http://localhost:3000/chat")
      .then((data) => data.json())
      .then((data) => {
        setChat(data);
      });
  }, [changeChat]);
  return (
    <ChatContext.Provider
      value={{
        setcurChatId,
        curChatId,
        chatwindow,
        setChatWindow,
        chat,
        setChat,
        addChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
