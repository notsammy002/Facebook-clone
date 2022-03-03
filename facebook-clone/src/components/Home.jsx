import React from "react";
import { HomePageLeft } from "./HomePageLeft";
import { HomePageMiddle } from "./HomePageMiddle";
import { HomePageRight } from "./HomePageRight";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.Home}>
      <HomePageLeft />
      <HomePageMiddle />
      <HomePageRight />
    </div>
  );
};
