import React, { useContext } from "react";
import { HomePageLeft } from "../components/HomePageLeft";
import { HomePageMiddle } from "../components/HomePageMiddle";
import { HomePageRight } from "../components/HomePageRight";
import styles from "../components/Home.module.css";
import { AuthContext } from "../context/AuthContext";

export const Home = () => {
  const { userdata } = useContext(AuthContext);
  console.log(userdata);
  return (
    <div className={styles.Home}>
      <HomePageLeft />
      <HomePageMiddle />
      <HomePageRight />
    </div>
  );
};
