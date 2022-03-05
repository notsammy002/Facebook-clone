import React from "react";
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

export const HomePageLeft = () => {
  let [see, setSee] = React.useState(true);
  const click = () => {
    setSee(!see);
  };
  return (
    <div className={styles.HomePageLeft}>
      <HomeLeftRow title="Muskan Issrani" src="" />
      <HomeLeftRow title="Friends" Icon={PeopleAltOutlinedIcon} />
      <HomeLeftRow title="Marketplace" Icon={StorefrontOutlinedIcon} />
      <HomeLeftRow title="Ads" Icon={BarChartIcon} />
      <HomeLeftRow title="Blood Donations" Icon={InvertColorsIcon} />
      <HomeLeftRow title="Messanger" Icon={MessageIcon} />
      <HomeLeftRow title="Groups" Icon={SupervisedUserCircleIcon} />

      {!see ? (
        <>
          <HomeLeftRow title="Events" Icon={CalendarTodayIcon} />
          <HomeLeftRow title="Favourites" Icon={StarIcon} />
          <HomeLeftRow title="Pages" Icon={EmojiFlagsIcon} />
          <HomeLeftRow title="Watch" Icon={SubscriptionsOutlinedIcon} />
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
