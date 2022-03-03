import { Avatar } from "@material-ui/core";
import React from "react";
import styles from "./HomePageLeft.module.css";

export const HomeLeftRow = ({ src, Icon, title }) => {
  return (
    <div className={styles.HomeLeftRow}>
      {!Icon && <Avatar src={src} />}
      {Icon && <Icon color="primary" />}
      <h4>{title}</h4>
    </div>
  );
};
