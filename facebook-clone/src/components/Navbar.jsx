import React from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@mui/material/Avatar";
import { Tooltip } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/">
          <img
            alt="facebook-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%%29.svg.png"
          />
        </Link>
        <div className={styles.navLeftInput}>
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className={styles.navCenter}>
        <Link to="/">
          <Tooltip
            title="Home"
            className={
              location.pathname !== "/"
                ? styles.navCenterIcon
                : styles.navCenterSelected
            }
          >
            <HomeIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link to="/friends">
          <Tooltip
            title="Friends"
            className={
              location.pathname !== "/friends"
                ? styles.navCenterIcon
                : styles.navCenterSelected
            }
          >
            <PeopleAltOutlinedIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link to="/watch">
          <Tooltip
            title="watch"
            className={
              location.pathname !== "/watch"
                ? styles.navCenterIcon
                : styles.navCenterSelected
            }
          >
            <SubscriptionsOutlinedIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link to="/marketplace">
          <Tooltip
            title="Marketplace"
            className={
              location.pathname !== "/marketplace"
                ? styles.navCenterIcon
                : styles.navCenterSelected
            }
          >
            <StorefrontOutlinedIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link to="/groups">
          <Tooltip
            title="Groups"
            className={
              location.pathname !== "/groups"
                ? styles.navCenterIcon
                : styles.navCenterSelected
            }
          >
            <SupervisedUserCircleIcon fontSize="large" />
          </Tooltip>
        </Link>
      </div>
      <div className={styles.navRight}>
        <div className={styles.navRightAvtar}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <h4>Muskan</h4>
        </div>
        <div className={styles.navRightIcons}>
          <MenuIcon />
        </div>
        <div className={styles.navRightIcons}>
          <ChatBubbleIcon />
        </div>
        <div className={styles.navRightIcons}>
          <NotificationsIcon />
        </div>
        <div className={styles.navRightIcons}>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};
