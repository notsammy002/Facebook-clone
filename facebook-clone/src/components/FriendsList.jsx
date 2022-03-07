import React, { useEffect, useState } from "react";
import styles from "./list.module.css";

export const FriendsList = ({ user }) => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const getdetail = async (uid) => {
      console.log(uid);
      const res = await fetch(
        `https://facebook-json-server.herokuapp.com/users/?uid=${uid}`
      );
      const json = await res.json();
      setUserDetails(json[0]);
    };

    user.uid ? getdetail(user.uid) : console.log("no uid");
  }, [user]);

  let userDetail = userDetails;

  return userDetail ? (
    <div className={styles.card}>
      <img className={styles.profilepic} src={userDetail.profile} />
      <div>
        <p>
          {userDetails.firstname} {userDetail.lastname}
        </p>
      </div>
    </div>
  ) : null;
};
