import { Box, Button, Chip, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useContext, useRef } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import { ChatContext } from '../ChatArea';

const Chat = () => {
    const { activeconversation, setChats, activechat, setConversations } = useContext(ChatContext)
    const addChatRef = useRef()

    const addChat = () => {
        let date = new Date()
        if (addChatRef.current.value === '') return
        if (activeconversation.solved) return
        setChats(prevState => {
            const chatObj = {
                chatTypeId: 1,
                message: addChatRef.current.value,
                userType: 'user',
                createdAt: date,
                conversationId: activeconversation.id,
            }
            return [...prevState, chatObj]
        })

        setConversations(prevConversations => {
            let newConversations = prevConversations.map(conversation => {
                if (conversation.id === activeconversation.id) {
                    conversation.updatedAt = date;
                }
                return conversation
            })
            return newConversations
        })
        addChatRef.current.value = ''
    }

    const markSolved = () => {
        setConversations(prevConversations => {
            let newConversations = prevConversations.map(conversation => {
                if (conversation.id === activeconversation.id) {
                    conversation.solved = true;
                }
                return conversation
            })
            console.log(newConversations, 'nc')
            return newConversations
        })
    }
    return (
        <Paper sx={{ minHeight: "100%", height: "100%", display: "flex" }} elevation={2}>
            <Box alignSelf={"flex-end"} width="100%">
                {activechat && activechat.map((chat, index) => {
                    let date = new Date(chat.createdAt)
                    date = date.toISOString()
                    let formattedDate = date.split("T")[0].split("-")
                    let formattedTime = date.split("T")[1].split(":")
                    return (
                        <Box textAlign={chat.userType === 'user' ? "right" : "left"} margin={"10px"} key={index}>
                            <Button variant="contained" display="block" color="success">{chat.message}</Button>
                            <Typography variant='caption' sx={{ fontStyle: 'italic' }} display="block">{formattedDate[1]}-{formattedDate[2]}, {formattedTime[0]}:{formattedTime[1]}</Typography>
                        </Box>
                    )
                })}
                <Box textAlign={"right"} margin={"10px"}>
                    <Button onClick={markSolved}>
                        <Chip icon={<SaveIcon />} label="MARK AS SOLVED" variant="outlined" />
                    </Button>
                </Box>
                <Grid container sx={{ backgroundColor: "#e6e6e6" }}>
                    <Grid item xs={2} md={1} margin={"auto"}>
                        <Button disabled>
                            <AttachFileIcon></AttachFileIcon>
                        </Button>
                    </Grid>
                    <Grid item xs={8} md={10} margin={"auto"}>
                        <TextField fullWidth label="Type your message here" id="fullWidth" variant='standard' inputRef={addChatRef} InputProps={{
                            disableUnderline: true,
                        }} />
                    </Grid>
                    <Grid item xs={2} md={1} margin={"auto"}>
                        <Button color="secondary">
                            <SendIcon onClick={addChat}></SendIcon>
                        </Button>
                    </Grid>
                </Grid >
            </Box>
        </Paper>
    );
};

export default Chat;
