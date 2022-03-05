import React, { useEffect } from "react";
import styles from "./Messenger.module.css";
import style from "./Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

export const Messenger = ({ onClose }) => {
  var [chat, setChat] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chat")
      .then((data) => data.json())
      .then((data) => {
        setChat(data);
      });
  }, []);
  return (
    <div className={styles.Messenger}>
      <h4>Messenger</h4>
      <div className={style.navLeftInput}>
        <SearchIcon />
        <input type="text" placeholder="Search Messanger" />
      </div>
      <div>
        <List>
          {chat.map((item) => {
            console.log(item);
            return (
              <ListItem button key="{item.person_2_name}">
                <ListItemIcon>
                  <Avatar alt="" src="" />
                </ListItemIcon>
                <ListItemText
                  onClick={onClose}
                  primary={item.person_2_name}
                  secondary={item.chatbox[item.chatbox.length - 1].message}
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};
