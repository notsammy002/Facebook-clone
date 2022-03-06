import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Chatbox.module.css";
import CloseIcon from "@material-ui/icons/Close";
import { style } from "@mui/system";
import SendIcon from "@material-ui/icons/Send";
import ScrollToBottom from "react-scroll-to-bottom";

export const ChatBox = () => {
  const { addChat, chat, setChatWindow, curChatId } = useContext(ChatContext);
  const [mess, setMess] = useState("");
  return (
    <div className={styles.chatBox}>
      {chat.map((item) =>
        curChatId === item.id ? (
          <div>
            <div className={styles.chatHeader}>
              <Avatar sx={{ width: 20, height: 20 }} />
              <div className={styles.headCont}>
                <h4>{item.person_2_name}</h4>
                <div className={styles.chattime}>Active 3 hours ago</div>
              </div>
              <div
                className={styles.close}
                onClick={() => setChatWindow(false)}
              >
                <CloseIcon fontSize="large" color="primary" />
              </div>
            </div>
            <ScrollToBottom className={styles.chatB}>
              {item.chatbox.map((chats) => (
                <div
                  className={
                    chats.sender === item.person_1_id
                      ? styles.myChat
                      : styles.otherChat
                  }
                >
                  <div
                    className={
                      chats.sender === item.person_1_id
                        ? styles.myChat1
                        : styles.otherChat1
                    }
                  >
                    {chats.message}
                  </div>
                </div>
              ))}
            </ScrollToBottom>
            <div className={styles.chatInput}>
              <div className={styles.Input}>
                <input
                  value={mess}
                  onChange={(e) => setMess(e.currentTarget.value)}
                  type="text"
                  placeholder="Aa"
                />
                <div
                  className={styles.close}
                  onClick={() => {
                    addChat(item.id, mess);
                    setMess("");
                  }}
                >
                  <SendIcon fontSize="large" color="primary" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
