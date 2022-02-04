import React, { useState, useEffect, createContext } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Toolbar from '../Toolbar/Toolbar';
import ChatList from './ChatList/ChatList';
import Chat from './Chat/Chat'

export const ChatContext = createContext()

const ChatArea = () => {

    const [conversations, setConversations] = useState([])
    const [chats, setChats] = useState([])
    const [activeconversation, setActiveConversation] = useState()
    const [activechat, setActiveChat] = useState()

    const fetchAllChatsAndDetails = async () => {
        let url = 'https://api.jsonbin.io/b/61d47e2d2675917a6289eb0c'
        let options = {
            method: "GET",
        }
        let response = await fetch(url, options)
        if (response && response.ok) {
            let data = await response.json()
            setConversations(data.data.conversations)
        }

        url = 'https://api.jsonbin.io/b/61d47e752675917a6289eb3a'
        response = await fetch(url, options)
        if (response && response.ok) {
            let data = await response.json()
            setChats(data.data.chats)
        }
    }

    useEffect(() => {
        fetchAllChatsAndDetails()
    }, [])

    useEffect(() => {
        setActiveConversation(conversations[0])
    }, [conversations])

    useEffect(() => {
        let activeChat = chats.filter(chat => {
            return chat.conversationId === activeconversation.id
        })
        setActiveChat(activeChat)
    }, [activeconversation, chats])

    const contexts = {
        conversations, setConversations,
        chats, setChats,
        activeconversation, setActiveConversation,
        activechat, setActiveChat
    }

    return (
        <ChatContext.Provider value={contexts}>
            <Box>
                <Paper elevation={2} >
                    <Grid container>
                        <Grid item xs={12}>
                            <Toolbar></Toolbar>
                        </Grid>
                    </Grid>
                </Paper>
                <Box height={"50px"}>
                </Box>
                <Paper elevation={2} >
                    <Grid container>
                        <Grid item xs={12} >
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={4} lg={4}>
                                    <ChatList></ChatList>

                                </Grid>
                                <Grid item xs={12} md={8} lg={8}>
                                    <Chat></Chat>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </ChatContext.Provider >
    );
};

export default ChatArea;