import React from "react";
import styles from "./Notification.module.css";
import List from "@material-ui/core/List";
import { NotificationList } from "./NotificationList";

export const Notification = () => {
  return (
    <div className={styles.notification}>
      <h4>Notification</h4>

      <div>
        <List>
          <NotificationList
            primary="Purvi's birthday was yesterday."
            secondary="a day ago"
          />
          <NotificationList
            primary="Manju added a new photo"
            secondary="2 days ago"
          />
          <NotificationList
            primary="xyz liked your comment."
            secondary="2 days ago"
          />
          <NotificationList
            primary="abc posted an update"
            secondary="3 days ago"
          />
          <NotificationList
            primary="pqr added a new photo"
            secondary="3 days ago"
          />
          <NotificationList
            primary="def added a new photo"
            secondary="4 days ago"
          />
        </List>
      </div>
    </div>
  );
};
