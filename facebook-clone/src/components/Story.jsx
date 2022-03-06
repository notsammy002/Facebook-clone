import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styles from "./HomePageMiddle.module.css";

export const Story = ({ img, profSrc, title }) => {
  const [viewed, setviewed] = useState(false);
  useEffect(() => {
    console.log(viewed);
  }, [viewed]);
  return (
    <div
      onClick={() => {
        setviewed(true);
      }}
    >
      <div style={{ backgroundImage: `url(${img})` }} className={styles.story}>
        <Avatar
          className={
            viewed ? styles.story__avatar_viewed : styles.story__avatar
          }
          src={profSrc}
        />
        <h4>{title}</h4>
      </div>
    </div>
  );
};
