import React from "react";
import { HomePageLeft } from "./HomePageLeft";
import { HomePageMiddle } from "./HomePageMiddle";
import { HomePageRight } from "./HomePageRight";
import styles from "./Home.module.css";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

export const Home = () => {
  return (
    <div className={styles.Home}>
      <HomePageLeft />
      <HomePageMiddle />
      <HomePageRight />
      <Box
        className={styles.Box}
        sx={{
          display: "none",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 350,
            height: 400,
          },
        }}
      >
        <Paper elevation={3} />
      </Box>
    </div>
  );
};
