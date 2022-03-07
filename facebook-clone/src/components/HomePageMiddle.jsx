import React from "react";
import { Feeds } from "./Feeds";
import HomePost from "./HomePost";
import styles from "./HomePageMiddle.module.css";

export const HomePageMiddle = () => {
  return (
    <div className={styles.HomePageMiddle}>
      <Feeds />
      <HomePost />
    </div>
  );
};
