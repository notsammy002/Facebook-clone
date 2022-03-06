import React, { useEffect, useContext, useState } from 'react'
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import styles from "./style.module.css"
import { v4 } from 'uuid';
import ReactPlayer from 'react-player';

import axios from "axios";
import { Box } from '@mui/system';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BasicMenu from './DeletePost';
import { Comment, ExpandMore } from '@mui/icons-material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Context } from './PostContext';
import ShareIcon from '@mui/icons-material/Share';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: 30,
    }
});



const HomePost = () => {

    const { user, setUser } = useContext(Context);

    const [expanded, setExpanded] = React.useState(false);

    const { comment, setComment} = useContext(Context);

    const [value, setValue] = React.useState("")

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    useEffect(() => {
        fetchUsers();
        
    }, []);

    useEffect(() => {
        fetchComments();
    }, [handleExpandClick])
    

    const fetchUsers = () => {
        axios
            .get('http://localhost:3000/posts')
            .then((res) => {
                console.log(res);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchComments = () => {
        axios
            .get('http://localhost:3000/comments')
            .then((res) => {
                console.log(res,"he");
                setComment(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const onChangeHandle = (e) => {
        setValue(e.currentTarget.value);

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // check if the value is empty
        if(value) {
            setComment([...comment, {
               id: v4,
                body: value,
            }]);
            setValue("");
        }
    };


    // const PostUsers = () => {
    //     axios
    //         .post('https://jsonservermock.herokuapp.com/posts', {
    //             ...user,
    //             comment,
    //         })
    //         .then((res) => {
    //             console.log(res);
    //             setUser(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    const longText = "👍 😂 😍 🥰 😡";


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log(event.id, event)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (itemToDelete) => {
        console.log(itemToDelete.id)
        const userList = user.filter((e) => e.id !== itemToDelete.id);
        setUser(userList);
    };


    return (
        <div>
            <Box>
                {user.map((user) => (

                    <Card sx={{ maxWidth: 500, maxHeight: "fit-content", marginBlock: 10, }} >
                        <CardHeader sx={{ textAlign: "left" }}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }}
                                    aria-label="recipe"
                                    alt={user.first_name}
                                    src={user.avatar}
                                >
                                    R
                                </Avatar>
                            }
                            action={
                                <div>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                    </Menu>
                                </div>
                            }
                            title={user.username}
                            subheader="September 14, 2016"


                        />


                        <CardContent sx={{ textAlign: "left" }}>
                            <Typography variant="body2" color="text.secondary">
                                {user.post_disc}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="fit-content"
                            image={user.post}
                            alt={user.first_name}
                        />

                        <Box sx={{ textAlign: "left", margin: 1, display: "flex", gap: 1 }}>
                            <ThumbUpIcon />{user.likes}

                        </Box>
                        <Box sx={{
                            border: 1,
                            borderRight: 0,
                            borderLeft: 0,
                            margin: 1,
                            marginBottom: 0,
                            display: "flex",
                            borderColor: 'grey',
                            padding: 0, grap: 4
                        }}>

                            <CustomWidthTooltip title={longText}>
                                <IconButton sx={{ marginLeft: 6, marginRight: 12, fontSize: 5 }}>
                                    <ThumbUpIcon style={{ fontSize: 25 }} /><p style={{ marginLeft: "10px", fontSize: "12px" }}>Like</p>
                                </IconButton>
                            </CustomWidthTooltip>



                            <IconButton expand={expanded} onClick={handleExpandClick}>
                                <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 25 }} /><p style={{ marginLeft: "10px", fontSize: "13px" }}>Comment</p>
                            </IconButton>

                            <IconButton sx={{ marginLeft: 6, marginRight: 15, fontSize: 5 }}>
                                    <ShareIcon style={{ fontSize: 25 }} /><p style={{ marginLeft: "10px", fontSize: "12px" }}>Like</p>
                                </IconButton>
                        </Box>

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardHeader sx={{ textAlign: "left" }}
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }}
                                        aria-label="recipe"
                                        alt={user.first_name}
                                        src={user.avatar}
                                    >
                                        R
                                    </Avatar>
                                }
                                title ={
                                    <form onSubmit={handleFormSubmit}>
                                        <input className={styles.inputBox}
                                            type="text"
                                            placeholder="Write a comment..."
                                            value={value}
                                            onChange={onChangeHandle} />
                                        <button type="submit">Submit</button>
                                    </form>
                                }     
                               />
                            
                        </Collapse>
                            {user.comment.map((comments) => (
                            <li key={user.id}>
                                {comments.commented}
                                </li>
                        ))}

                        
                    </Card>


                ))}
            </Box>
        </div>
    )
}

export default HomePost