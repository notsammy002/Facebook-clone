import React, { useEffect, useContext, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import styles from "./style.module.css";
import { v4 } from "uuid";
import ReactPlayer from "react-player";

import ShareIcon from "@mui/icons-material/Share";
import axios from "axios";
import { Box } from "@mui/system";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BasicMenu from "./DeletePost";
import { Comment, ExpandMore } from "@mui/icons-material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Context } from "./PostContext";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 30,
  },
});

export const Watch = () => {
  const { user, setUser } = useContext(Context);
  const [expanded, setExpanded] = React.useState(false);

  const [comment, setComment] = useState("");

  const onChangeHandle = (e) => {
    setComment(e.currentTarget.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // check if the value is empty
    if (comment.trim().length === 0) {
      alert("Please enter a value!");
      return;
    }

    // create a new todo
    const comm = {
      id: v4,
      comment: comment,
    };

    // add todo to the state
    setUser([comm, ...user]);

    // clear the value of task
    setComment("");
  };

  const longText = " 👍 😂 😍 🥰 😡";

  return (
    <div>
      <Box>
        {user.map((user) => (
          <Card
            sx={{
              maxWidth: 635,
              maxHeight: 2500,
              marginBlock: 10,
              marginLeft: 30,
            }}
          >
            <CardHeader
              sx={{ textAlign: "left" }}
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  alt={user.first_name}
                  src={user.avatar}
                >
                  R
                </Avatar>
              }
              action={<BasicMenu key={user.id} />}
              title={user.username}
              subheader="September 14, 2016"
            />

            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="body2" color="text.secondary">
                {user.video_disc}
              </Typography>
            </CardContent>
            <ReactPlayer width="100%" height="100%" url={user.video} />

            <Box
              sx={{
                textAlign: "left",
                margin: 1,
                display: "flex",
                gap: 1,
                bgcolor: "white",
              }}
            >
              <ThumbUpIcon />
              {user.likes}
            </Box>
            <Box
              sx={{
                border: 1,
                borderRight: 0,
                borderLeft: 0,
                margin: 1,
                marginBottom: 0,
                display: "flex",
                borderColor: "grey",
                padding: 0,
                grap: 4,
              }}
            >
              <CustomWidthTooltip title={longText}>
                <IconButton
                  sx={{ marginLeft: 6, marginRight: 12, fontSize: 5 }}
                >
                  <ThumbUpIcon style={{ fontSize: 25 }} />
                  <p style={{ marginLeft: "10px", fontSize: "12px" }}>Like</p>
                </IconButton>
              </CustomWidthTooltip>

              <IconButton expand={expanded} onClick={handleExpandClick}>
                <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 25 }} />
                <p style={{ marginLeft: "10px", fontSize: "13px" }}>Comment</p>
              </IconButton>

              <IconButton sx={{ marginLeft: 16, marginRight: 10, fontSize: 5 }}>
                <ShareIcon style={{ fontSize: 25 }} />
                <p style={{ marginLeft: "10px", fontSize: "12px" }}>Like</p>
              </IconButton>
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardHeader
                sx={{ textAlign: "left" }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    alt={user.first_name}
                    src={user.avatar}
                  >
                    R
                  </Avatar>
                }
                title={
                  <form onSubmit={handleFormSubmit}>
                    <input
                      className={styles.inputBox}
                      type="text"
                      name="comment"
                      placeholder="Write a comment..."
                      value={comment}
                      onChange={onChangeHandle}
                    />
                    <button type="submit">Submit</button>
                  </form>
                }
              />
              {/* {user.comment.map((comments) => (
                            <li key={user.id}>
                                {comments.commented}
                                </li>
                        ))} */}
            </Collapse>
          </Card>
        ))}
      </Box>
    </div>
  );
};
