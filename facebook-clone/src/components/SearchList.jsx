import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { ChatContext } from "../context/ChatContext";
import Typography from "@material-ui/core/Typography";

export const SearchList = ({ item }) => {
  return (
    <div>
      <ListItem button key="{item.person_2_name}">
        <ListItemIcon>
          <Avatar alt="" src="" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography style={{ fontWeight: "500", color: "black" }}>
              {item.firstname + " " + item.lastname}
            </Typography>
          }
        ></ListItemText>
      </ListItem>
    </div>
  );
};
