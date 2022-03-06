import { Avatar } from "@mui/material";
import React from "react";
import styles from "./HomePageLeft.module.css";

export const HomeLeftRow = ({ src, Icon, title, click }) => {
  return (
    <div className={styles.HomeLeftRow} onClick={click ? click : null}>
      {!Icon && <Avatar sx={{ width: 24, height: 24 }} src={src} />}
      {Icon && <Icon style={{ color: "#2e81f4" }} />}
      <h4>{title}</h4>
    </div>
  );
};
