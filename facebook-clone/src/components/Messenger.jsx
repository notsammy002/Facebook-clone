import React, { useContext } from "react";
import styles from "./Messenger.module.css";
import style from "./Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import List from "@material-ui/core/List";
import { ChatContext } from "../context/ChatContext";
import { MessangerList } from "./MessangerList";

export const Messenger = ({ onClose }) => {
  const { chat } = useContext(ChatContext);
  const [searchText, setSearch] = React.useState("");
  return (
    <div className={styles.Messenger}>
      <h4>Messenger</h4>
      <div className={style.navLeftInput}>
        <SearchIcon />
        <input
          value={searchText}
          onChange={(e) => {
            setSearch(e.currentTarget.value);
          }}
          type="text"
          placeholder="Search Messanger"
        />
      </div>
      <div>
        <List>
          {chat.map((item) => {
            console.log(item);
            if (searchText === "" || item.person_2_name.includes(searchText)) {
              return <MessangerList onClose={onClose} item={item} />;
            }
          })}
        </List>
      </div>
    </div>
  );
};
