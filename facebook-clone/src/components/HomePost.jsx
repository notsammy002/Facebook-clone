import React, { useState, useEffect } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import axios from "axios";
import { Box } from '@mui/system';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const HomePost = () => {

    const [User, setUser] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

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

    return (
        <div>
    <Box sx={{justifyContent:"center" }}>
            {User.map((user) => (
                
                <Card sx={{ maxWidth: 500, maxHeight: "fit-content", paddingBlock: 10, marginBlock: 10 }} >
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                                alt={ user.first_name }
                                src= { user.avatar}
                            >
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title= {user.username}
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            { user.post_disc }
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        height="fit-content"
                        image={ user.post }
                        alt= {user.first_name}
                    />


                    
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            { user.likes }
                            <ThumbUpIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                

            ))}
            </Box>
        </div>
    )
}

export default HomePost