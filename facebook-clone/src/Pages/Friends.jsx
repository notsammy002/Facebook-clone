import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "../components/friends.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Cards } from "../components/Cards";

export const Friends = () => {
  const { logout, userdata } = useContext(AuthContext);
  const [request, setRequest] = useState();
  const [suggest, setSuggest] = useState();
  const [haveData, setHaveData] = useState(false);

  useEffect(() => {
    const getFriends = async (uid) => {
      const res = await fetch(
        `https://facebook-json-server.herokuapp.com/friends/?uid=${uid}`
      );
      const json = await res.json();
      setRequest(json[0].requests);
      setSuggest(json[0].suggestion);
      setHaveData(true);
      console.log(json);
    };

    userdata && userdata.uid ? getFriends(userdata.uid) : console.log("no uid");
  }, [userdata]);

  return (
    <>
      <div className={styles.sidebar}>
        <section>
          <h1>Friends</h1>
        </section>
        <div>
          <Link to="/friends">
            <span className={styles.iconsection}>
              <span className={styles.csssprite2Uq6nzMReuh}></span>
            </span>
            Home
          </Link>
        </div>
        <div>
          <Link to="/friends/requests">
            <span className={styles.iconsection}>
              <span className={styles.csssprite2Uq6nzMReu}></span>
            </span>
            Friend requests
            <span className={styles.arrowsection}>
              <span className={styles.arrow}></span>
            </span>
          </Link>
        </div>

        <div>
          <Link to="/friends/suggestions">
            <span className={styles.iconsection}>
              <span className={styles.csssprite2Uq6nzMRe}></span>
            </span>
            Suggestions
            <span className={styles.arrowsection2}>
              <span className={styles.arrow}></span>
            </span>
          </Link>
        </div>

        <div>
          <Link to="/friends/list">
            <span className={styles.iconsection}>
              <span className={styles.csssprite2Uq6nzMR}></span>
            </span>
            All Friends
            <span className={styles.arrowsection3}>
              <span className={styles.arrow}></span>
            </span>
          </Link>
        </div>
        <div>
          <Link to="/friends/birthdays">
            <span className={styles.iconsection}>
              <span className={styles.csssprite2Uq6nzM}></span>
            </span>
            Birthdays
          </Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.requestdiv}>
          {haveData
            ? request.map((user) => (
                <Cards key={user.id} user={user} type="friend" />
              ))
            : null}
        </div>
        <hr />
        <div className={styles.suggestdiv}>
          {haveData
            ? suggest.map((user) => <Cards key={user.id} user={user} />)
            : null}
        </div>
      </div>
    </>
  );
};
