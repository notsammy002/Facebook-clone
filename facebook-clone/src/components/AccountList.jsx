import { Avatar } from "@mui/material";
import React from "react";
import styles from "./Account.module.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

export const AccountList = ({ src, Icon, primary, secondary, click }) => {
  return (
    <div onClick={click}>
      <ListItem button key="1">
        <ListItemIcon>
          {!Icon && <Avatar alt="" src="" sx={{ width: 48, height: 48 }} />}
          {Icon && (
            <div className={styles.Icon}>
              <Icon style={{ color: "black" }} />
            </div>
          )}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography style={{ fontWeight: "500", color: "black" }}>
              {primary}
            </Typography>
          }
          secondary={
            <Typography style={{ fontSize: "12px" }}>{secondary}</Typography>
          }
        ></ListItemText>
      </ListItem>
    </div>
  );
};
