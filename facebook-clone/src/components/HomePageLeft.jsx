import React, { useContext } from "react";
import styles from "./HomePageLeft.module.css";
import { HomeLeftRow } from "./HomeLeftRow";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import BarChartIcon from "@material-ui/icons/BarChart";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import MessageIcon from "@material-ui/icons/Message";
import StarIcon from "@material-ui/icons/Star";
import CalendarTodayIcon from "@material-ui/icons//CalendarToday";
import EmojiFlagsIcon from "@material-ui/icons//EmojiFlags";
import { Link, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HomeFooter } from "./HomeFooter";

export const HomePageLeft = () => {
  let [see, setSee] = React.useState(true);
  const click = () => {
    setSee(!see);
  };
  const { userdata } = useContext(AuthContext);
  return (
    <div className={styles.HomePageLeft}>
      <HomeLeftRow
        title={userdata.firstname + " " + userdata.lastname}
        src=""
      />
      <Link className={styles.Links} to="/friends">
        <HomeLeftRow title="Friends" Icon={PeopleAltOutlinedIcon} />
      </Link>
      <Link className={styles.Links} to="marketplace">
        <HomeLeftRow title="Marketplace" Icon={StorefrontOutlinedIcon} />
      </Link>
      <HomeLeftRow title="Ads" Icon={BarChartIcon} />
      <HomeLeftRow title="Blood Donations" Icon={InvertColorsIcon} />
      <HomeLeftRow title="Messanger" Icon={MessageIcon} />
      <Link className={styles.Links} to="groups">
        <HomeLeftRow title="Groups" Icon={SupervisedUserCircleIcon} />
      </Link>

      {!see ? (
        <>
          <HomeLeftRow title="Events" Icon={CalendarTodayIcon} />
          <HomeLeftRow title="Favourites" Icon={StarIcon} />
          <HomeLeftRow title="Pages" Icon={EmojiFlagsIcon} />
          <Link className={styles.Links} to="watch">
            <HomeLeftRow title="Watch" Icon={SubscriptionsOutlinedIcon} />
          </Link>
          <HomeLeftRow title="Memories" Icon={AccessTimeIcon} />
          <HomeLeftRow title="Events" Icon={CalendarTodayIcon} />
          <HomeLeftRow title="Favourites" Icon={StarIcon} />
          <HomeLeftRow title="Pages" Icon={EmojiFlagsIcon} />
          <HomeLeftRow title="Watch" Icon={SubscriptionsOutlinedIcon} />
          <HomeLeftRow title="Memories" Icon={AccessTimeIcon} />
        </>
      ) : (
        <></>
      )}
      <HomeLeftRow
        click={click}
        title={see ? "See more" : "See Less"}
        Icon={see ? ArrowDropDownIcon : ArrowDropUpIcon}
      />
      <div className={styles.hrLine}></div>
      <HomeFooter />
    </div>
  );
};
