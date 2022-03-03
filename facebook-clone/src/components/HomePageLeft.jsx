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
export const HomePageLeft = () => {
  return (
    <div className={styles.HomePageLeft}>
      <HomeLeftRow title="Muskan Issrani" src="" />
      <HomeLeftRow title="Friends" Icon={PeopleAltOutlinedIcon} />
      <HomeLeftRow title="Marketplace" Icon={StorefrontOutlinedIcon} />
      <HomeLeftRow title="Ads" Icon={BarChartIcon} />
      <HomeLeftRow title="Groups" Icon={SupervisedUserCircleIcon} />
      <HomeLeftRow title="Watch" Icon={SubscriptionsOutlinedIcon} />
      <HomeLeftRow title="Memories" Icon={AccessTimeIcon} />
      <HomeLeftRow title="See more" Icon={ArrowDropDownIcon} />
    </div>
  );
};
