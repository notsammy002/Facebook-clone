import React from "react";
import styles from "./HomePageLeft.module.css";
import { Link, Route, Routes } from "react-router-dom";

export const HomeFooter = () => {
  return (
    <div>
      <div className={styles.bottom}>
        <Link className={styles.Link} to="/privacy">
          Privacy
        </Link>
        <span>&nbsp;.&nbsp;</span>
        <Link className={styles.Link} to="/terms">
          Terms
        </Link>
        <span>&nbsp;.&nbsp;</span>
        <Link className={styles.Link} to="/Advertising">
          Advertising
        </Link>
        <span>&nbsp;.&nbsp;</span>
        <Link className={styles.Link} to="/Adchoices">
          Ad choices
        </Link>
        <span>&nbsp;.&nbsp;</span>
        <Link className={styles.Link} to="/cookies">
          Cookies
        </Link>
        <span>&nbsp;.&nbsp;</span>
        <Link className={styles.Link} to="/more">
          More
        </Link>
        <span>&nbsp;.&nbsp;</span>
        <span>Meta © 2022</span>
      </div>
      <Routes>
        <Route path="/privacy" />
        <Route path="/terms" />
        <Route path="/Advertising" />
        <Route path="/Adchoices" />
        <Route path="/cookies" />
        <Route path="/more" />
      </Routes>
    </div>
  );
};
