import { Avatar, Button, Grid, Box, Typography, Paper, } from '@mui/material';
import React, { useContext } from 'react';
import { ChatContext } from '../ChatArea';

const SingleChat = ({ conversation }) => {
    const { chats, activeconversation, setActiveConversation } = useContext(ChatContext)

    let mostRecentMessage = chats.filter(chat => {
        if (chat.conversationId === conversation.id) return chat
        return
    })

    const changeActiveChat = () => {
        setActiveConversation(conversation)
        return
    }

    return (
        <Box >
            <Paper elevation={activeconversation && activeconversation.id === conversation.id ? 6 : 2} sx={{ margin: "10px" }}>
                <Button fullWidth onClick={changeActiveChat} color="secondary" disabled={conversation.solved}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "left", height: "100%" }}>
                                <Avatar alt="Samyak" src={conversation.user.profilePic} sx={{ maxHeight: "100%", maxWidth: "100%", height: '60px', width: '60px', margin: "auto" }} ></Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "left", height: "100%" }}>
                                <Box fullWidth textAlign="left">
                                    <Typography variant='h6' display="block" sx={{ fontWeight: "bold" }}>{conversation.user.firstName}</Typography>
                                    {mostRecentMessage.length !== 0 ?
                                        <Typography variant='h7' display="block">{mostRecentMessage[mostRecentMessage.length - 1].message}</Typography> : null
                                    }
                                    <Typography>{conversation.updatedAt.split('T')[0]}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Button >
            </Paper>
        </Box >
    );
};

export default SingleChat;
