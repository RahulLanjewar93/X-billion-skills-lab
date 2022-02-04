import React, { useContext } from 'react';
import { Grid, Paper } from '@mui/material';
import SingleChat from './SingleChat';
import { ChatContext } from '../ChatArea';

const ChatList = () => {
    const { conversations } = useContext(ChatContext)
    return (
        <Paper elevation={2}>
            <Grid container>
                <Grid item xs={12} padding={"10px"} sx={{ height: "100%" }}>
                    {conversations.length !== 0 && conversations.map(conversation => {
                        return (
                            <SingleChat key={conversation.id} conversation={conversation} ></SingleChat>
                        )
                    })}
                </Grid>
            </Grid >
        </Paper>
    );
};

export default ChatList;
