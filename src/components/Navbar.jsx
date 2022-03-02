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
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Navbar = () => {
  let location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState({
    menu: false,
    messanger: false,
    notifications: false,
    account: false,
  });

  const handleClick = (event) => {
    setAnchorEl({
      ...anchorEl,
      [event.currentTarget.id]: event.currentTarget,
    });
  };

  const handleClose = () => {
    setAnchorEl({
      menu: false,
      messanger: false,
      notifications: false,
      account: false,
    });
  };
  const openMenu = Boolean(anchorEl.menu);
  const openMessanger = Boolean(anchorEl.messanger);
  const openNotification = Boolean(anchorEl.notification);
  const openAccount = Boolean(anchorEl.account);
  const idMenu = openMenu ? "simple-popover" : undefined;
  const idMessanger = openMessanger ? "simple-popover" : undefined;
  const idNotification = openNotification ? "simple-popover" : undefined;
  const idAccount = openAccount ? "simple-popover" : undefined;
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
        <Link
          to="/"
          className={
            location.pathname !== "/"
              ? styles.navCenterIcon
              : styles.navCenterSelected
          }
        >
          <Tooltip title="Home">
            <HomeIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link
          to="/friends"
          className={
            location.pathname !== "/friends"
              ? styles.navCenterIcon
              : styles.navCenterSelected
          }
        >
          <Tooltip title="Friends">
            <PeopleAltOutlinedIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link
          to="/watch"
          className={
            location.pathname !== "/watch"
              ? styles.navCenterIcon
              : styles.navCenterSelected
          }
        >
          <Tooltip title="watch">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link
          to="/marketplace"
          className={
            location.pathname !== "/marketplace"
              ? styles.navCenterIcon
              : styles.navCenterSelected
          }
        >
          <Tooltip title="Marketplace">
            <StorefrontOutlinedIcon fontSize="large" />
          </Tooltip>
        </Link>
        <Link
          to="/groups"
          className={
            location.pathname !== "/groups"
              ? styles.navCenterIcon
              : styles.navCenterSelected
          }
        >
          <Tooltip title="Groups">
            <SupervisedUserCircleIcon fontSize="large" />
          </Tooltip>
        </Link>
      </div>
      <div className={styles.navRight}>
        <div className={styles.navRightAvtar}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <h4>Muskan</h4>
        </div>
        <div
          id="menu"
          className={
            anchorEl.menu ? styles.navRightIconsSelected : styles.navRightIcons
          }
          onClick={handleClick}
        >
          <MenuIcon />
        </div>
        <Popover
          id={idMenu}
          open={openMenu}
          anchorEl={anchorEl.menu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
        <div
          id="messanger"
          className={
            anchorEl.messanger
              ? styles.navRightIconsSelected
              : styles.navRightIcons
          }
          onClick={handleClick}
        >
          <ChatBubbleIcon />
        </div>
        <Popover
          id={idMessanger}
          open={openMessanger}
          anchorEl={anchorEl.messanger}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
        <div
          id="notification"
          className={
            anchorEl.notification
              ? styles.navRightIconsSelected
              : styles.navRightIcons
          }
          onClick={handleClick}
        >
          <NotificationsIcon />
        </div>
        <Popover
          id={idNotification}
          open={openNotification}
          anchorEl={anchorEl.notification}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
        <div
          id="account"
          className={
            anchorEl.account
              ? styles.navRightIconsSelected
              : styles.navRightIcons
          }
          onClick={handleClick}
        >
          <ArrowDropDownIcon />
        </div>
        <Popover
          id={idAccount}
          open={openAccount}
          anchorEl={anchorEl.account}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    </div>
  );
};
