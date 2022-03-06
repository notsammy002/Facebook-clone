import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

export const NotificationList = ({ primary, secondary }) => {
  return (
    <div>
      <ListItem button key="1">
        <ListItemIcon>
          <Avatar alt="" src="" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography style={{ color: "black" }}>{primary}</Typography>
          }
          secondary={
            <Typography style={{ fontSize: "small", color: "#2e81f4" }}>
              {secondary}
            </Typography>
          }
        ></ListItemText>
      </ListItem>
    </div>
  );
};
