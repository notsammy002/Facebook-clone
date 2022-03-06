import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { ChatContext } from "../context/ChatContext";
import Typography from "@material-ui/core/Typography";

export const MessangerList = ({ item, onClose }) => {
  const { setChatWindow, setcurChatId } = useContext(ChatContext);
  return (
    <div>
      <ListItem button key="{item.person_2_name}">
        <ListItemIcon>
          <Avatar alt="" src="" />
        </ListItemIcon>
        <ListItemText
          onClick={() => {
            onClose();
            setChatWindow(true);
            setcurChatId(item.id);
          }}
          primary={
            <Typography style={{ fontWeight: "500", color: "black" }}>
              {item.person_2_name}
            </Typography>
          }
          secondary={item.chatbox[item.chatbox.length - 1].message}
        ></ListItemText>
      </ListItem>
    </div>
  );
};
