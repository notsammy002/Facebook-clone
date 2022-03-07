import React, { useContext } from "react";
import { AccountList } from "./AccountList";
import List from "@material-ui/core/List";
import { AuthContext } from "../context/AuthContext";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { HomeFooter } from "./HomeFooter";
import styles from "./Account.module.css";

export const Account = () => {
  const { userdata, logout } = useContext(AuthContext);
  return (
    <div className={styles.Account}>
      {" "}
      <List className={styles.AList}>
        <AccountList
          src=""
          primary={userdata ? userdata.firstname + " " + userdata.lastname : ""}
          secondary="See your profile"
        />
        <div className={styles.hrLine}></div>
        <AccountList
          Icon={FeedbackIcon}
          primary="Give Feedback"
          secondary="Help us improve Facebook."
        />
        <div className={styles.hrLine}></div>
        <AccountList Icon={SettingsIcon} primary="Settings &amp; privacy" />
        <AccountList Icon={HelpIcon} primary="Help &amp; support" />
        <AccountList
          Icon={Brightness3Icon}
          primary="Display &amp; accessibility"
        />
        <AccountList Icon={ExitToAppIcon} click={logout} primary="Log Out" />
        <div className={styles.footer}>
          <HomeFooter />
        </div>
      </List>
    </div>
  );
};
